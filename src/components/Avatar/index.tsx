import styles from './styles.module.css'

export interface AvatarProps {
    hasBorder?: boolean,
    src: any
}


const Avatar: React.FC<AvatarProps> = ({hasBorder = true, src}) => {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src} />
    )
}

export default Avatar