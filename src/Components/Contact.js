import React from "react";

export default function Contact() {
    return (
        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Contact </h3>
                <p className="py-4">
                    Email:{" "}
                    <a href="mailto:maikuangyao9428@gmail.com" target="_blank" rel="noreferrer" className="link link-primary">
                        maikuangyao9428@gmail.com
                    </a>
                </p>
                <p className="py-4">
                    Phone: <span className="text-primary"> (919) 916-9157</span>
                </p>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}
