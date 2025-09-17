import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Play } from 'lucide-react';

const QuantumDemo: React.FC = () => {
  const [coinFlips, setCoinFlips] = useState<number[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [totalFlips, setTotalFlips] = useState(0);

  const flipCoin = async () => {
    setIsFlipping(true);
    
    // Simulate quantum randomness (50/50 probability)
    const result = Math.random() < 0.5 ? 0 : 1;
    
    setTimeout(() => {
      setCoinFlips(prev => [...prev, result]);
      setTotalFlips(prev => prev + 1);
      setIsFlipping(false);
    }, 1000);
  };

  const runMultipleFlips = async () => {
    setIsFlipping(true);
    const newFlips: number[] = [];
    
    for (let i = 0; i < 100; i++) {
      const result = Math.random() < 0.5 ? 0 : 1;
      newFlips.push(result);
    }
    
    setTimeout(() => {
      setCoinFlips(prev => [...prev, ...newFlips]);
      setTotalFlips(prev => prev + 100);
      setIsFlipping(false);
    }, 2000);
  };

  const reset = () => {
    setCoinFlips([]);
    setTotalFlips(0);
  };

  const zerosCount = coinFlips.filter(flip => flip === 0).length;
  const onesCount = coinFlips.filter(flip => flip === 1).length;
  const zerosPercentage = totalFlips > 0 ? (zerosCount / totalFlips * 100).toFixed(1) : 0;
  const onesPercentage = totalFlips > 0 ? (onesCount / totalFlips * 100).toFixed(1) : 0;

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Quantum Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience quantum superposition with our Hadamard coin flip simulation
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Demo Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hadamard Coin Flip
            </h3>
            <p className="text-gray-700 mb-6">
              Apply H to |0⟩ to prepare (|0⟩ + |1⟩)/√2. Measurement yields 0 or 1 with ~50% probability.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-4">Quantum Circuit</h4>
              <div className="font-mono text-sm bg-gray-100 p-4 rounded">
                |0⟩ ——[H]—— M
              </div>
              <p className="text-sm text-gray-600 mt-2">
                H: Hadamard Gate, M: Measurement
              </p>
            </div>
          </motion.div>

          {/* Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            {/* Coin Visual */}
            <div className="text-center mb-8">
              <motion.div
                animate={isFlipping ? { rotateY: 360 } : {}}
                transition={{ duration: 1, repeat: isFlipping ? Infinity : 0 }}
                className="inline-block w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
              >
                {coinFlips.length > 0 && !isFlipping ? coinFlips[coinFlips.length - 1] : '?'}
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={flipCoin}
                disabled={isFlipping}
                className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                <Play size={16} />
                <span>Flip Once</span>
              </button>
              <button
                onClick={runMultipleFlips}
                disabled={isFlipping}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                <Play size={16} />
                <span>Run 100 Flips</span>
              </button>
              <button
                onClick={reset}
                disabled={isFlipping}
                className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                <RotateCcw size={16} />
                <span>Reset</span>
              </button>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-blue-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600">0</div>
                <div className="text-sm text-gray-600">{zerosPercentage}%</div>
                <div className="text-xs text-gray-500">{zerosCount} results</div>
              </div>
              <div className="text-center bg-purple-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-600">1</div>
                <div className="text-sm text-gray-600">{onesPercentage}%</div>
                <div className="text-xs text-gray-500">{onesCount} results</div>
              </div>
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              Total shots: {totalFlips}. Ideal probabilities are 50/50; your results approach this with more trials.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuantumDemo;