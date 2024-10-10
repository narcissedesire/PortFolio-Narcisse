import React, { Suspense, lazy } from "react";
import { achievementList } from "./Data";

// Utiliser React.lazy pour charger dynamiquement AnimatedNumbers
const AnimatedNumbers = lazy(() => import("react-animated-numbers"));

export default function AchievementSection() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 grid grid-cols-2 sm:grid-cols-4 gap-5">
        {achievementList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 max-sm:mb-3"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}

                {/* Utilisation de Suspense pour gérer le chargement asynchrone */}
                <Suspense fallback={<div>Chargement...</div>}>
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                </Suspense>

                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
