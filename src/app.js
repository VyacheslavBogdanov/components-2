import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex

	const [steps] = useState(data);

	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	const further = () => {
		setActiveIndex(activeIndex + 1);
	};

	const back = () => {
		setActiveIndex(activeIndex - 1);
	};

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	// const firstStep = activeIndex === 0;
	// const lastStep = activeIndex === steps.at(-1);

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						Контент соответственный шагу. Сейчас активен шаг 3
					</div>
					<ul className={styles["steps-list"]}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						{steps.map((item, index) => (
							<li
								key={item.id}
								className={`${styles["steps-item"]} ${
									index === activeIndex ? styles.active : ""
								}`}
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
						{/* <li
							className={styles["steps-item"] + " " + styles.done}
						>
							Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы
							<button className={styles["steps-item-button"]}>
								1
							</button>
							При клике на кнопку установка выбранного шага в качестве активного
							Шаг 1
						</li> */}
						{/* <li
							className={styles["steps-item"] + " " + styles.done}
						>
							<button className={styles["steps-item-button"]}>
								2
							</button>
							Шаг 2
						</li> */}
						<li
							className={
								styles["steps-item"] +
								" " +
								styles.done +
								" " +
								styles.active
							}
						>
							<button className={styles["steps-item-button"]}>
								3
							</button>
							Шаг 3
						</li>
						{/* <li className={styles["steps-item"]}>
							<button className={styles["steps-item-button"]}>
								4
							</button>
							Шаг 4
						</li> */}
					</ul>
					<div className={styles["buttons-container"]}>
						<button className={styles.button} onClick={back}>
							Назад
						</button>
						<button className={styles.button} onClick={further}>
							Далее
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
