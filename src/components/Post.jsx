import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-Br'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({author, content, publishedAt }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const dataTitle = format(publishedAt, "d 'de' MMMM 'às' H'h'",
    {
      locale: ptBr,
    }
  )
  const dataDesc = formatDistanceToNow(publishedAt,
    {
      locale: ptBr,
      addSuffix: true
    }
  )

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newComment])
    setNewComment('')
  }
  function handleNewCommentChange() {
    setNewComment(event.target.value)
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
        <time title={dataTitle} dateTime={publishedAt.toISOString()}>{dataDesc}</time>
      </header>

      <div className={styles.content} >
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link'){
            return (<p key={line.content}><a href="#">{line.content}</a></p>)
          }
        })}
        
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment" 
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newComment}
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment}/>
        })}
      </div>


    </article>
  )
}