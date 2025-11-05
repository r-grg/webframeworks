import { useEffect, useState } from "react";

type Props = {
  min: number;
  max: number;
};

export default function RandomValue({ min, max }: Props) {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
      setValue(random);
    };

    update(); // direct tonen
    const id = setInterval(update, 1000);

    return () => clearInterval(id);
  }, [min, max]);

  return (
    <div>
      <h2>Random Value</h2>
      <p>{value}</p>
    </div>
  );
}
