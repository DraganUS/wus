import Logo from '@/components/icons/logo';
import clsx from 'clsx'

const Header = () => {
    return (
        <header className="bg-black ">
            <div className="max-w-screen-xl fluid-container px-4 py-8 sm:px-6 sm:py-12 lg:px-8  border-b border-amber-300 ">
                <Logo className={clsx('w-44')}/>
            </div>
        </header>
    );
};

export default Header;
