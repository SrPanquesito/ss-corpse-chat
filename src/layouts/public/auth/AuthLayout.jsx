import {
  Outlet
} from 'react-router-dom';

const AuthLayout = () => {
    return (
      <section className="flex justify-between items-cente w-full h-full">
        <aside className="hidden md:flex flex-col justify-center items-center w-1/2 h-screen bg-gray-800">
            <img src="../src/assets/images/logo.png"
                className="w-20 md:w-32 xl:w-52 mb-12"
                alt="" />
            <h2 className="text-zinc-100 mb-12">Welcome to Corpse Chat</h2>
            <span className="text-gray-400">Your edgy online space.</span>
        </aside>
        <aside className="w-full md:w-1/2">
          <Outlet />
        </aside>
      </section>
    );
}

export default AuthLayout;