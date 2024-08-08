import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

export const App = () => {
  

  const [steps] = useState(data);

  const [activeIndex, setActiveIndex] = useState(0);

  
  const further = () => {
    setActiveIndex(activeIndex + 1);
  };

  const back = () => {
    setActiveIndex(activeIndex - 1);
  };

  const first = () => {
    setActiveIndex(0);
  };
  

  const firstStep = activeIndex === 0;
  const lastStep = activeIndex === steps.length - 1;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles["steps-content"]}>
  
            {steps[activeIndex].content}
          </div>
          <ul className={styles["steps-list"]}>
  
            {steps.map((item, index) => (
              <li
                key={item.id}
                className={`${styles["steps-item"]} ${
                  index <= activeIndex ? styles.done : ""
                } ${index === activeIndex ? styles.active : ""}`}
              >
                <button
                  className={styles["steps-item-button"]}
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}
                </button>
                {item.title}
              </li>
            ))}
          </ul>
          <div className={styles["buttons-container"]}>
            <button
              className={styles.button}
              onClick={back} 
			  disabled={firstStep}
            >
              Назад
            </button>
            <button
              className={styles.button}
              onClick={lastStep ? first : further}
            >
              {lastStep ? "Начать сначала" : "Далее"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
