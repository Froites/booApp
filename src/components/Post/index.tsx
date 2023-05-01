
import Avatar from '../Avatar';
import Comment from '../Comments';
import styles from './styles.module.css'

import dayjs from '../../utils/dayjsUtil';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link',
    content: string,
}

export interface PostType {
    id: number,
    author: Author,
    publishedAt: Date
    content: Content[],
}

interface PostProps {
    post: PostType
}

const Post: React.FC<PostProps> = ({ post }: PostProps) => {

    const [comments, setComments] = useState([
       'Belo projeto man!! 👏👏'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormated = dayjs(post.publishedAt).format("DD [de] MMMM [às] HH[:]mm[h]");

    const publishedDateRelativeToNow = dayjs(post.publishedAt).fromNow()

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event?.target.setCustomValidity('')
        setNewCommentText(event?.target.value)
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeleteOne);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('Esse comentário é obrigatório!')
        setNewCommentText(event?.target.value)
    }

    const isNewCommentEmpty = newCommentText.length === 0


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                    <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>Públicado {publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {post.content.map(item => {
                    if (item.type === 'paragraph') {
                    return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}><a href=''>{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    placeholder='Deixe um comentário...' 
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
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