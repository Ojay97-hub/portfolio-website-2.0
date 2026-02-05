import React from 'react';
import { Bell, Settings, Home, CreditCard, TrendingUp, MoreHorizontal, Search } from 'lucide-react';

const BankingApp = () => {
  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-6">
        <div className="flex items-center space-x-3">
          <img 
            src="/api/placeholder/40/40" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A328' }}>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-600" />
          <Settings className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Account Balance */}
      <div className="px-4 mb-6">
        <div className="text-sm text-gray-600 mb-1">Current Account</div>
        <div className="text-3xl font-bold text-black">£2,300.00</div>
      </div>

      {/* Card */}
      <div className="px-4 mb-6">
        <div className="relative rounded-2xl p-6 text-white" style={{ backgroundColor: '#0C2626' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFB800' }}>
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">FinWiz</span>
              <MoreHorizontal className="w-4 h-4" />
            </div>
          </div>
          <div className="mb-4">
            <div className="text-xs opacity-75 mb-1">•••• •••• •••• 5678</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="bg-teal-600 px-3 py-1 rounded-full text-xs font-medium">
              CURRENT ACCOUNT
            </div>
            <div className="text-sm font-medium">VISA</div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white opacity-50 rounded-full"></div>
              <div className="w-2 h-2 bg-white opacity-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 mb-6">
        <div className="flex space-x-3">
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium">
            Transfer
          </button>
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium">
            Pay
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium">
            More
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <button className="text-blue-600 text-sm font-medium">view all</button>
        </div>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="search" 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm"
          />
        </div>

        {/* Transaction List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">Today</div>
            <div className="text-sm font-medium">£2,300.00</div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFB800' }}>
                <span className="text-xs font-bold text-white">M</span>
              </div>
              <span className="text-sm font-medium">M&S</span>
            </div>
            <span className="text-sm font-medium text-red-500">-£100</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F472B6' }}>
                <span className="text-xs font-bold text-white">A</span>
              </div>
              <span className="text-sm font-medium">Alex</span>
            </div>
            <span className="text-sm font-medium text-green-500">+£50</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A78BFA' }}>
                <span className="text-xs font-bold text-white">A</span>
              </div>
              <span className="text-sm font-medium">Amazon</span>
            </div>
            <span className="text-sm font-medium text-red-500">-£25</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A78BFA' }}>
                <span className="text-xs font-bold text-white">N</span>
              </div>
              <span className="text-sm font-medium">Netflix</span>
            </div>
            <span className="text-sm font-medium text-red-500">-£25</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0E584E' }}>
                <span className="text-xs font-bold text-white">S</span>
              </div>
              <span className="text-sm font-medium">Salary</span>
            </div>
            <span className="text-sm font-medium text-green-500">+£2400</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200">
        <div className="flex items-center justify-around py-3">
          <div className="flex flex-col items-center space-y-1">
            <Home className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Home</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <CreditCard className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Pay</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <TrendingUp className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Trends</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <CreditCard className="w-6 h-6 text-black" />
            <span className="text-xs text-black font-medium">Cards</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingApp; 