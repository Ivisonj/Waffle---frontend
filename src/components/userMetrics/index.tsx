interface UserMetricsProps {
  current_streak: number;
  best_streak: number;
  level: number;
}

const UserMetrics = ({
  current_streak,
  best_streak,
  level,
}: UserMetricsProps) => {
  return (
    <div className="w-auto h-auto flex flex-row">
      <div className="w-[100px] flex flex-col items-center">
        <div className="w-[50px] h-[50px] flex justify-center items-center bg-brand-pink rounded-[100px]">
          <h3 className="text-white folt-semibold">{current_streak}</h3>
        </div>
        <h4>Streak atual</h4>
      </div>
      <div className="w-[100px] flex flex-col justify-center items-center">
        <div className="w-[50px] h-[50px] flex justify-center items-center bg-brand-yellow rounded-[100px]">
          <h3 className="text-white folt-semibold">{best_streak}</h3>
        </div>
        <h4>Melhor Streak</h4>
      </div>
      <div className="w-[100px] flex flex-col justify-center items-center">
        <div className="w-[50px] h-[50px] flex justify-center items-center bg-brand-gray rounded-[100px]">
          <h3 className="text-white folt-semibold">{level}</h3>
        </div>
        <h4>Nível</h4>
      </div>
    </div>
  );
};

export default UserMetrics;
