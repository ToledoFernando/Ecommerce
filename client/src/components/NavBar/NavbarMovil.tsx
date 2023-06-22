import { useState } from "react";

import { AiOutlineWarning } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IUserStore } from "../../store/userStore/userStoreTypes";

function NavbarMovil({ userDataLog }: { userDataLog: IUserStore }) {
  const [viewbar, setViewBar] = useState(false);

  return (
    <div className="max-[880px]:visible min-[880px]:hidden">
      <AiOutlineMenu
        size={30}
        className="cursor-pointer"
        onClick={() => setViewBar(!viewbar)}
      />
      <div
        className={`absolute top-0 ${
          viewbar ? "right-0" : "-right-full"
        } transition-all duration-500 w-max max-[500px]:w-full px-8 bg-zinc-100 shadow-2xl h-screen`}
      >
        <div className="h-full relative">
          <GrClose
            className="absolute top-5 left-0 cursor-pointer"
            onClick={() => setViewBar(!viewbar)}
            size={20}
          />
          <ul className="flex gap-7  flex-col items-center justify-center h-full ">
            <li>
              <NavLink onClick={() => setViewBar(false)} to="/">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setViewBar(false)} to="/products">
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setViewBar(false)} to="/category">
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setViewBar(false)} to="/about">
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setViewBar(false)} to="/contact">
                Contacto
              </NavLink>
            </li>
            {userDataLog.isLoggedIn ? (
              <li className="w-full">
                {/* <NavLink to="/myaccount" className="group relative"> */}
                <hr className="mb-3 w-full" />
                <div className="right-5 top-8 rounded-lg w-full text-center h-max p-2">
                  <li className="hover:bg-slate-50 px-2 py-2">
                    <NavLink
                      onClick={() => setViewBar(false)}
                      to="/myaccount/orders"
                    >
                      Mis Pedidos
                    </NavLink>
                  </li>
                  <li className="hover:bg-slate-50 px-2 py-2">
                    <NavLink onClick={() => setViewBar(false)} to="/myaccount">
                      Mi cuenta
                    </NavLink>
                  </li>
                  <li className="hover:bg-slate-50 px-2 py-2">
                    <NavLink
                      onClick={() => setViewBar(false)}
                      to="/myaccount/settings"
                    >
                      Configuracion
                    </NavLink>
                  </li>
                  <li className="hover:bg-slate-50 px-2 py-2 mb-5">
                    <NavLink
                      onClick={() => setViewBar(false)}
                      to="/myacount/logout"
                    >
                      Cerrar Sesion
                    </NavLink>
                  </li>
                  <hr />
                  <li className="text-white mt-5 bg-gradient-to-tr from-red-400 to-red-600 px-2 py-1 rounded-full">
                    <NavLink
                      onClick={() => setViewBar(false)}
                      to="/myaccount/delete-acount"
                      className="flex gap-2 items-center justify-center"
                    >
                      <AiOutlineWarning className="invert" size={18} />
                      Eliminar cuenta
                    </NavLink>
                  </li>
                </div>
                {/* </NavLink> */}
              </li>
            ) : (
              <li className="text-white font-semibold bg-gradient-to-tr from-red-400 to-red-600 px-2 py-1 rounded-full">
                <NavLink to="/login">Iniciar Sesion</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarMovil;
