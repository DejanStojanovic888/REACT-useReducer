import { Link, useOutletContext } from "react-router-dom"
import styles from "./HomePage.module.css"
import { WiTime2 } from "react-icons/wi";


function HomePage() {
    const { recepti } = useOutletContext()
    return (
        <div>
                {recepti.map(recept => (
                    <Link to={`/profile/${recept.id}`} key={recept.id}>
                        <div className={styles.card}  >
                            <h2>{recept.title}</h2>
                            <div className={styles.time}>
                                <WiTime2 size={24} />
                                <span>{recept.prepTime}</span>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    )
}

export default HomePage