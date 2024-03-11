"use client"
import React from "react";
import Button from "@/system-design/atoms/Button";
import Input from "@/system-design/atoms/Input";
import Dialog from "../add/components/dialog";
import CompanyActions from "@/lib/context/hooks/companyActions";
import "./profile.scss"
export default function ProfileEdit() {
    const { UseGetCompany: company } = CompanyActions()


    return (
        <>
            <main className="profile-edit-main">
                <h2 className="title">Edita tu perfil de empresa</h2>
                <form className="profile-edit-form">
                    <section className="form-sections">
                        <section className="form-section">
                            <Input defaultValue={company.nombre} className="profile-input" label="Nombre" type="text" />
                            <Input defaultValue={company.correoElectronico} className="profile-input" label="Correo" type="email" />
                            <Input defaultValue={company.teléfono} className="profile-input" label="Telefono" type="tel" />
                        </section>
                        <section className="photo-section">
                            <img src={company?.logo ? company.logo : "/Images/user.png"} alt="" />
                            <label className="change-photo button" >
                                Cambiar imagen
                                <input type="file"accept="image/*" />
                            </label>
                        </section>
                    </section>
                </form>
                <Button content="Confirmar" />
            </main>
            {/* <Dialog OnSubmit={undefined} dialogRef={undefined} /> */}
        </>
    );
}
