import React, {useContext} from 'react';
import {Tooltip,} from '@arco-design/web-react';
import {IconMoonFill, IconSunFill,} from '@arco-design/web-react/icon';
import {GlobalContext} from '@/context';
import useLocale from '@/utils/useLocale';
import Logo from '@/assets/logo.svg';
import IconButton from './IconButton';
import styles from './style/index.module.less';

function Navbar() {
    const t = useLocale();

    const {setLang, lang, theme, setTheme} = useContext(GlobalContext);

    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Logo/>
                    <div className={styles['logo-name']}>违约客户管理系统</div>
                </div>
            </div>
            <ul className={styles.right}>
                <li>
                    <Tooltip
                        content={
                            theme === 'light'
                                ? t['settings.navbar.theme.toDark']
                                : t['settings.navbar.theme.toLight']
                        }
                    >
                        <IconButton
                            icon={theme !== 'dark' ? <IconMoonFill/> : <IconSunFill/>}
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        />
                    </Tooltip>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
