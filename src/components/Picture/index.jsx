import { useState } from "react";

const Picture = ({ pic, title }) => {
    if (!pic) return null;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            {/* ภาพที่สามารถคลิกเพื่อเปิดใน Modal */}
            <div className="w-[150px] h-[150px] overflow-hidden rounded-md hover:cursor-pointer" onClick={openModal}>
                <img 
                    src={pic} 
                    alt={title} 
                    className="w-full h-full object-cover border-2 border-PrimarySubContent"
                />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-slate-400 p-1 rounded-lg relative">
                        {/* ปุ่มปิด */}
                        <button onClick={closeModal} className="absolute top-2 right-2 text-xl text-white bg-red-500 px-2 rounded-full">X</button>
                        <img src={pic} alt={title} className="max-w-[80vw] max-h-[80vh] rounded-md"/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Picture;
