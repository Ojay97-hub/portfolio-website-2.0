# Moving the Heroku projects to Render

Order: easiest first. Do one at a time and tick it off.

- [ ] 1. Blackjack Game (P3), no code changes
- [ ] 2. Eventory Event Scheduler (P4), small code change, database already on Neon
- [ ] 3. Jungle Peaks Brewing (P5), code change + database move + Stripe

Repos:
- Blackjack: https://github.com/Ojay97-hub/black-jack-game
- Event Scheduler: https://github.com/Ojay97-hub/event-scheduler
- Jungle Peaks: https://github.com/Ojay97-hub/Jungle-Peaks-Brewing-Co

Free Render web services sleep after ~15 minutes idle. The first visit afterwards takes 30-60 seconds to wake. That is normal.

---

## 1. Blackjack Game (P3)

This is not Django. It is a Python terminal game (`run.py`) served in the browser by a small Node app (`index.js`, using `node-pty`). Render runs it as a **Node** web service.

1. Go to https://dashboard.render.com and click **+ New** (top right) → **Web Service**.
2. Choose **Build and deploy from a Git repository** → **Next**.
3. Connect GitHub if asked, then select **Ojay97-hub/black-jack-game**.
4. Fill in the form:

   | Field | Value |
   |---|---|
   | Name | `black-jack-game` (this becomes `black-jack-game.onrender.com`) |
   | Region | Frankfurt (same as your other service) |
   | Branch | `main` |
   | Runtime | **Node** |
   | Build Command | `npm install && pip3 install -r requirements.txt` |
   | Start Command | `node index.js` |
   | Instance Type | **Free** |

5. Open **Advanced** → **Add Environment Variable**:
   - `NODE_VERSION` = `16` (the `node-pty` version in this repo is old and often fails to compile on the newest Node)
6. Click **Create Web Service** and watch the **Logs** tab. A good deploy ends with "Your service is live".
7. Open the `.onrender.com` URL. You should see the terminal and the game start.

### If it goes wrong

| Symptom | Fix |
|---|---|
| Build fails on `node-pty` / `node-gyp` | Change `NODE_VERSION` to `14` and redeploy (Manual Deploy → Clear build cache & deploy). |
| `pip3: command not found` in the build | Change the Build Command to `npm install` only, then tell Claude. The game needs the `colorama` package, so the fix is a small Dockerfile. |
| Page loads but the game shows `ModuleNotFoundError: colorama` | Same as above, pip did not install it. |
| Page loads but is blank / stuck | Check the Logs tab for errors and paste them to Claude. |

### Then
- Copy the new URL.
- Update the Blackjack project link in this portfolio (the Featured Projects data).
- Once everything is confirmed working, delete the old Heroku app (see "Shutting down Heroku" below).

---

## 2. Eventory Event Scheduler (P4)

Your database is already on **Neon** (Postgres), so no data needs moving. Only the code has to allow the Render domain.

### 2a. Code change (Claude can do this and push it for you)

In `event_scheduler/settings.py`, add after `ALLOWED_HOSTS` and `CSRF_TRUSTED_ORIGINS` are defined:

```python
RENDER_HOST = os.environ.get("RENDER_EXTERNAL_HOSTNAME")
if RENDER_HOST:
    ALLOWED_HOSTS.append(RENDER_HOST)
    CSRF_TRUSTED_ORIGINS.append(f"https://{RENDER_HOST}")
```

Commit and push to `main`.

### 2b. Get your existing environment values

Find `SECRET_KEY` and `DATABASE_URL`:
- Heroku dashboard → your event scheduler app → **Settings** → **Reveal Config Vars**.
- Or the Neon dashboard → your project → **Connection string**.

### 2c. Create the service

1. Render → **+ New** → **Web Service** → pick **Ojay97-hub/event-scheduler**.
2. Fill in:

   | Field | Value |
   |---|---|
   | Name | `event-scheduler` |
   | Region | Frankfurt |
   | Runtime | **Python 3** |
   | Build Command | `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate` |
   | Start Command | `gunicorn event_scheduler.wsgi` |
   | Instance Type | **Free** |

3. Environment variables:
   - `SECRET_KEY` = value from Heroku
   - `DATABASE_URL` = Neon connection string
   - `PYTHON_VERSION` = `3.12.6`
4. **Create Web Service**, wait for the deploy, open the URL, and log in.

---

## 3. Jungle Peaks Brewing (P5)

The most involved one. Do it last.

### 3a. Code change (Claude can do this and push it for you)

Same snippet as above in `jungle_peaks_brewing/settings.py`, after `ALLOWED_HOSTS` and `CSRF_TRUSTED_ORIGINS`.

### 3b. Move the database off Heroku **before** cancelling Heroku

1. Create a free database at https://neon.tech (or Supabase). Copy its connection string.
2. Install the Heroku CLI, then:
   ```
   heroku pg:backups:capture --app <your-heroku-app-name>
   heroku pg:backups:download --app <your-heroku-app-name>
   ```
   This saves `latest.dump`.
3. Restore into the new database:
   ```
   pg_restore --no-owner --no-acl -d "<NEON_CONNECTION_STRING>" latest.dump
   ```
   (Needs PostgreSQL client tools installed.)

### 3c. Create the service

1. Render → **+ New** → **Web Service** → **Ojay97-hub/Jungle-Peaks-Brewing-Co**.
2. Fill in:

   | Field | Value |
   |---|---|
   | Name | `jungle-peaks-brewing` |
   | Region | Frankfurt |
   | Runtime | **Python 3** |
   | Build Command | `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate` |
   | Start Command | `gunicorn jungle_peaks_brewing.wsgi` |
   | Instance Type | **Free** |

3. Environment variables (copy the values from Heroku → Settings → Reveal Config Vars):
   - `SECRET_KEY`
   - `DATABASE_URL` (the new Neon string)
   - `PYTHON_VERSION` = `3.11.9`
   - `STRIPE_PUBLIC_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WH_SECRET`
   - `EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD` (and `DEFAULT_FROM_EMAIL` if you set it)
   - `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, only if the S3 bucket `jungle-peaks-brewing` still exists and you still want to use it. If you omit them, static files are served by whitenoise.
4. **Create Web Service** and check that the deploy goes live.

### 3d. Stripe webhook

Stripe dashboard → **Developers** → **Webhooks** → edit the endpoint URL to
`https://<your-service>.onrender.com/checkout/wh/` (keep the same path as your current Heroku endpoint). Copy the new **signing secret** into `STRIPE_WH_SECRET` on Render if it changed.

---

## Shutting down Heroku (only after each project works on Render)

1. Confirm the Render URL works, including login, checkout (Jungle Peaks) and data.
2. Heroku dashboard → the app → **Settings** → scroll down → **Delete app** (or scale dynos to 0 first if you want a safety net).
3. Check **Billing** to confirm nothing else is charging (Postgres add-ons are billed separately).

## Portfolio links

After each project is live, update its live link in the portfolio's project data, then rebuild and redeploy the portfolio.
