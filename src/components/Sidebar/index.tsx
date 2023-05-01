import styles from './styles.module.css';
import { PencilLine} from 'phosphor-react';
import Avatar from '../Avatar';


const Sidebar: React.FC = () => {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1678303801276-66e244cdd70e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"/>

            <div className={styles.profile}>
                <Avatar src="https://github.com/froites.png" />
                <strong>Jonh Doe</strong>
                <span>Web Develop</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
        </aside>
    );
}

export default Sidebar;