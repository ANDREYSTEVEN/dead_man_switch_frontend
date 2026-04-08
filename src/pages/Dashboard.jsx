import React from "react";
import { useDeadManSwitch } from "../hooks/useDeadManSwitch";
import TimerDisplay from "../components/deadman/TimerDisplay";

const Dashboard = () => {
  const { timeLeft, active, resetTimer } = useDeadManSwitch(30);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-semibold mb-6">
          Dead Man's Switch
        </h1>

        {/* Card principal */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl mb-4">
            Estado del sistema
          </h2>

          {/* Estado + Botón */}
          <div className="flex items-center justify-between mb-6">
            
            <span className={`font-medium ${
              active ? "text-green-400" : "text-red-500"
            }`}>
              {active ? "Activo" : "Inactivo"}
            </span>

            <button
              onClick={resetTimer}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition"
            >
              Estoy vivo
            </button>

          </div>

          {/* Timer */}
          <div className="mt-4">
            <TimerDisplay timeLeft={timeLeft} />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;