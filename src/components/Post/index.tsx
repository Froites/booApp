
import Avatar from '../Avatar';
import Comment from '../Comments';
import styles from './styles.module.css'

const Post: React.FC = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar src="https://github.com/froites.png" />
                    <div className={styles.authorInfo}>
                        <strong>Jonh Doe</strong>
                        <span>Web Develop</span>
                    </div>
                </div>
                    <time title='09 de Março às 14:43' dateTime='2023-03-09 14:40:02'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=''>👉 jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea placeholder='Deixe um comentário...' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
            
        </article>
    );
}

export default Post;