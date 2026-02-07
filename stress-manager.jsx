import React, { useState } from 'react';
import { Brain, CheckCircle2, Pause, ListTodo, Zap, Calendar } from 'lucide-react';

export default function StressManager() {
  const [activeTab, setActiveTab] = useState('quick-relief');
  const [breathCount, setBreathCount] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});
  const [priorities, setPriorities] = useState({ today: '', park: '' });

  const breathingExercise = () => {
    setBreathCount(prev => prev + 1);
  };

  const toggleCheck = (item) => {
    setCheckedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Stress Relief Toolkit</h1>
          <p className="text-gray-600">Tools to help you pause, prioritize, and regain presence</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('quick-relief')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'quick-relief'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Zap className="inline-block w-5 h-5 mr-2" />
              Quick Relief
            </button>
            <button
              onClick={() => setActiveTab('prioritize')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'prioritize'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ListTodo className="inline-block w-5 h-5 mr-2" />
              Prioritize
            </button>
            <button
              onClick={() => setActiveTab('daily-habits')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'daily-habits'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Calendar className="inline-block w-5 h-5 mr-2" />
              Daily Habits
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'quick-relief' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">When You Feel Overwhelmed</h2>
                
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
                    <Pause className="w-6 h-6 mr-2" />
                    60-Second Reset
                  </h3>
                  <ol className="space-y-2 text-gray-700 mb-4">
                    <li><strong>1.</strong> Stop what you're doing</li>
                    <li><strong>2.</strong> Take 3 deep breaths (click button below)</li>
                    <li><strong>3.</strong> Name one thing you can see, hear, and feel</li>
                    <li><strong>4.</strong> Ask: "What's the ONE thing that matters most right now?"</li>
                  </ol>
                  <button
                    onClick={breathingExercise}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Breathe ({breathCount} breaths taken)
                  </button>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center">
                    <Brain className="w-6 h-6 mr-2" />
                    Context-Switch Recovery
                  </h3>
                  <p className="text-gray-700 mb-3">When jumping between tasks:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Transition ritual:</strong> Before switching, write one sentence about where you left off</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Mental reset:</strong> Stand up, stretch for 30 seconds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Set intention:</strong> Say out loud what you're about to do</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Emergency Mantras</h3>
                  <div className="space-y-2 text-gray-700 italic">
                    <p>"I can only do one thing at a time, and that's enough."</p>
                    <p>"Behind doesn't mean failing. It means I'm learning."</p>
                    <p>"My presence matters more than my productivity."</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'prioritize' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cut Through the Noise</h2>
                
                <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200">
                  <h3 className="text-xl font-semibold text-indigo-900 mb-4">TODAY's Focus</h3>
                  <p className="text-gray-700 mb-3">If you could only accomplish ONE thing today, what would it be?</p>
                  <textarea
                    value={priorities.today}
                    onChange={(e) => setPriorities({ ...priorities, today: e.target.value })}
                    placeholder="Write your #1 priority here..."
                    className="w-full p-4 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="3"
                  />
                  <p className="text-sm text-gray-600 mt-2">Everything else is secondary. This is your anchor.</p>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">Parking Lot</h3>
                  <p className="text-gray-700 mb-3">What can you consciously decide to NOT do today?</p>
                  <textarea
                    value={priorities.park}
                    onChange={(e) => setPriorities({ ...priorities, park: e.target.value })}
                    placeholder="List things you're choosing to postpone (they're not forgotten, just parked)..."
                    className="w-full p-4 border-2 border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    rows="3"
                  />
                  <p className="text-sm text-gray-600 mt-2">Permission to let go, even temporarily, reduces mental clutter.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">About Those New Tools (Claude, Cursor, etc.)</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Reality check:</strong> You don't need to master everything right now.</p>
                    <p><strong>Starter approach:</strong> Pick ONE tool, ONE use case, for THIS week only.</p>
                    <p className="text-sm bg-white p-3 rounded border-l-4 border-indigo-500">
                      Example: "This week, I'll use Claude to help me summarize long emails. That's it."
                    </p>
                    <p className="text-sm text-gray-600">Small, specific adoption beats frantic learning every time.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'daily-habits' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sustainable Presence</h2>
                
                <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
                  <h3 className="text-xl font-semibold text-teal-900 mb-4">Morning Check-in (2 min)</h3>
                  <div className="space-y-3">
                    {[
                      'Before opening email/Slack, take 3 breaths',
                      'Write down your ONE priority for today',
                      'Set 2-3 "focus blocks" in your calendar (even just 30 min each)'
                    ].map((item, idx) => (
                      <label key={idx} className="flex items-start cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checkedItems[`morning-${idx}`] || false}
                          onChange={() => toggleCheck(`morning-${idx}`)}
                          className="mt-1 mr-3 w-5 h-5"
                        />
                        <span className={`text-gray-700 group-hover:text-teal-700 transition-colors ${
                          checkedItems[`morning-${idx}`] ? 'line-through text-gray-400' : ''
                        }`}>
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-rose-50 rounded-xl p-6 border-2 border-rose-200">
                  <h3 className="text-xl font-semibold text-rose-900 mb-4">Midday Reset (3 min)</h3>
                  <div className="space-y-3">
                    {[
                      'Step away from desk (walk, stretch, or just look outside)',
                      'Check: Am I still working on my #1 priority?',
                      'If derailed, forgive yourself and course-correct'
                    ].map((item, idx) => (
                      <label key={idx} className="flex items-start cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checkedItems[`midday-${idx}`] || false}
                          onChange={() => toggleCheck(`midday-${idx}`)}
                          className="mt-1 mr-3 w-5 h-5"
                        />
                        <span className={`text-gray-700 group-hover:text-rose-700 transition-colors ${
                          checkedItems[`midday-${idx}`] ? 'line-through text-gray-400' : ''
                        }`}>
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-violet-50 rounded-xl p-6 border-2 border-violet-200">
                  <h3 className="text-xl font-semibold text-violet-900 mb-4">End-of-Day Closure (5 min)</h3>
                  <div className="space-y-3">
                    {[
                      'Write down what you accomplished (even small wins count)',
                      'List 2-3 things for tomorrow - then close your notes',
                      'Physically close your laptop and say "I\'m done for today"'
                    ].map((item, idx) => (
                      <label key={idx} className="flex items-start cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checkedItems[`evening-${idx}`] || false}
                          onChange={() => toggleCheck(`evening-${idx}`)}
                          className="mt-1 mr-3 w-5 h-5"
                        />
                        <span className={`text-gray-700 group-hover:text-violet-700 transition-colors ${
                          checkedItems[`evening-${idx}`] ? 'line-through text-gray-400' : ''
                        }`}>
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6">
                  <p className="text-sm text-gray-600 italic">
                    <strong>Remember:</strong> These aren't more tasks to stress about. Start with just ONE habit that feels doable. You're building a practice, not checking boxes.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-2">When to seek more support:</h3>
          <p className="text-gray-600 text-sm">
            If this stress persists or intensifies, consider talking with a manager about workload, a colleague about collaboration, or a therapist about coping strategies. You deserve support.
          </p>
        </div>
      </div>
    </div>
  );
}