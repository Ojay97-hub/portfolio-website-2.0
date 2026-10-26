// Browser-window chrome (traffic lights + address bar) for framing
// project screenshots.
const BrowserFrame = ({ url, children, className = '' }) => (
  <div className={`overflow-hidden rounded-2xl border-2 border-ink bg-ivory shadow-pop-lg ${className}`}>
    <div className="flex items-center gap-2 border-b-2 border-ink bg-cream px-4 py-2.5">
      <span className="h-3 w-3 rounded-full border-2 border-ink bg-brand" />
      <span className="h-3 w-3 rounded-full border-2 border-ink bg-navy-mist" />
      <span className="h-3 w-3 rounded-full border-2 border-ink bg-ivory" />
      {url && (
        <span className="ml-3 hidden flex-1 truncate rounded-full border-2 border-ink/30 bg-ivory px-3 py-0.5 font-mono text-[10px] text-ink/60 sm:block">
          {url}
        </span>
      )}
    </div>
    {children}
  </div>
)

export default BrowserFrame
