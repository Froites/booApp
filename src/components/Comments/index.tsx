import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from '../Avatar';
import styles from './styles.module.css'

const Comment: React.FC = () => {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/froites.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jonh Doe</strong>
                            <time title='10 de Março às 00:15h' dateTime='2023-03-10 00:15:10'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Comment;