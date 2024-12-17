import React from "react";

interface ModalBaseProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const ModalBase = ({ isOpen = false, onClose, children }: ModalBaseProps) => {
    return isOpen && <div className="fixed z-[1001]">
        <div className="absolute bg-black/25 backdrop-blur-sm w-screen h-[150vh]">
            <div className="flex items-center justify-center h-screen overflow-y-hidden ">
                {children}
            </div>
        </div>
    </div>
}

export default ModalBase;
