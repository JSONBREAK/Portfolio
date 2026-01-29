import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import catNoIcon from '../../assets/cat-no-icon.png';

const Picture = ({ pic, title, size = 110, fullColumn = false }) => {
    const imageSrc = pic || catNoIcon;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Prevent background scroll and add ESC to close
    useEffect(() => {
        if (!isModalOpen) return;
        document.body.style.overflow = 'hidden';
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isModalOpen]);

    return (
            <div>
                {/* ภาพที่สามารถคลิกเพื่อเปิดใน Modal */}
                <div
                    className={`overflow-hidden rounded-xl hover:cursor-pointer border-4 border-transparent picture-glow transition-all duration-500 hover:scale-102 ${fullColumn ? "w-full h-[120px]" : ""}`}
                    style={fullColumn ? undefined : { width: size, height: size }}
                    onClick={openModal}
                >
                    <img 
                        src={imageSrc} 
                        alt={title} 
                        className={`object-cover rounded-xl ${fullColumn ? "w-full h-full" : "w-full h-full"}`}
                    />
                </div>

                {/* Modal (Portal) */}
                {isModalOpen && typeof window !== 'undefined' && createPortal(
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 animate-fadein" style={{pointerEvents: 'auto'}} onClick={closeModal}>
                        <button onClick={closeModal} className="fixed top-4 right-4 text-2xl text-white bg-red-500 px-3 py-1 rounded-full z-[10000] shadow-lg">X</button>
                        <img
                            src={imageSrc}
                            alt={title}
                            className="max-w-[96vw] max-h-[96vh] rounded-xl object-contain block shadow-2xl border-2 border-white"
                            style={{background: 'black'}}
                            onClick={e => e.stopPropagation()}
                        />
                    </div>,
                    document.body
                )}
            </div>
    );
}

export default Picture;
