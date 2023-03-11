
import Avatar from '../Avatar';
import Comment from '../Comments';
import styles from './styles.module.css'

import dayjs from '../../utils/dayjsUtil';
import { useState } from 'react';


interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    type: string,
    content: string,
}

interface PostProps {
    author: Author,
    content: Content[],
    publishedAt: Date
}

const Post: React.FC<PostProps> = ({author, content, publishedAt}) => {

    const [comments, setComments] = useState([
       'Belo projeto man!! 👏👏'
    ]);

    const [newCommentText, setNewCommentText] = useState('')
;
    const publishedDateFormated = dayjs(publishedAt).format("DD [de] MMMM [às] HH[:]mm[h]");

    const publishedDateRelativeToNow = dayjs(publishedAt).fromNow()

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange(){
        setNewCommentText(event?.target.value)
    }

    function deleteComment(commentToDelete){

        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeleteOne);
        
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                    <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>Públicado {publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === 'paragraph') {
                    return <p>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p><a href=''>{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea value={newCommentText} onChange={handleNewCommentChange} name='comment' placeholder='Deixe um comentário...' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
            
        </article>
    );
}

export default Post;