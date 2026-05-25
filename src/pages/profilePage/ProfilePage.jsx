import { Link, useOutletContext, useParams } from "react-router-dom"
import styles from "./ProfilePage.module.css"
import { WiTime2 } from "react-icons/wi";
import { useState } from 'react'

function ProfilePage() {
    const { id } = useParams()
    const { recepti, dispatch } = useOutletContext()
    const recept = recepti?.find(r => r.id === id)
    const [user, setUser] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: "UPDATE_COMMENTS", payload: { user, comment, id: id } })
        setUser('')
        setComment('')
    }

    return (
        <>
            <button className={styles.butt} onClick={() => window.history.back()}>Back</button>
            <div className={styles.profile}>
                {recept && (
                    <div>
                        <header>
                            <h1>{recept.title}</h1>
                        </header>
                        <main>
                            <p>{recept.description}</p>
                            {/* sastjci */}
                            <h3>Sastojci:</h3>
                            <ul className={styles.ingredients}>
                                {recept.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            {/* koraci */}
                            <h3>Koraci:</h3>
                            <ol className={styles.steps}>
                                {recept.steps.map((step, index) => {
                                    return <li key={index}>{step}</li>
                                })}
                            </ol>
                        </main>
                        <section>
                            <button onClick={() => dispatch({ type: "UPDATE_LIKES", payload: { id: id } })}>Likes: {recept.likes}</button>
                            <button onClick={() => dispatch({ type: "UPDATE_DISLIKES", payload: { id: id } })}>Disikes: {recept.dislikes}</button>
                        </section>
                        <section>
                            <h3>Comments:</h3>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <input value={user} onChange={e => setUser(e.target.value)} type="text" placeholder="User" /><br />
                                    <input value={comment} onChange={e => setComment(e.target.value)} type="text" placeholder="Comment" /><br />
                                    <button>Save</button>
                                </form>
                            </div>
                            {recept.comments.map((c) => (
                                <div className={styles.comment} key={c.id}>
                                    <h4>{c.user}</h4>
                                    <p>{c.text}</p>
                                </div>
                            )
                            )}
                        </section>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProfilePage