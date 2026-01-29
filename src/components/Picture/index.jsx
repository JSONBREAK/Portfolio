import { useState } from "react";
import catNoIcon from '../../assets/cat-no-icon.png';

const Picture = ({ pic, title, size = 110, fullColumn = false }) => {
    const imageSrc = pic || catNoIcon;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-slate-400 p-1 rounded-lg relative">
                        {/* ปุ่มปิด */}
                        <button onClick={closeModal} className="absolute top-2 right-2 text-xl text-white bg-red-500 px-2 rounded-full">X</button>
                        <img src={imageSrc} alt={title} className="max-w-[80vw] max-h-[80vh] rounded-md"/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Picture;
