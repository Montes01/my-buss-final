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
    <p className="description">Personaliza la información de tu perfil de empresa según tus necesidades. Actualiza tu nombre, correo electrónico, teléfono y cambia tu imagen de perfil.</p>
    <form className="profile-edit-form">
        <section className="form-sections">
            <section className="form-section">
                <Input defaultValue={company.Nombre} className="profile-input" label="Nombre" type="text" />
                <Input defaultValue={company.CorreoElectronico} className="profile-input" label="Correo" type="email" />
                <Input defaultValue={company.Teléfono} className="profile-input" label="Telefono" type="tel" />
            </section>
            <section className="photo-section">
                <img src={company?.Logo ? company.Logo : "/Images/user.png"} alt="" />
                <label className="change-photo button" >
                    Cambiar imagen
                    <input type="file"accept="image/*" />
                </label>
            </section>
        </section>
    </form>
    <Button content="Confirmar" />
</main>

            {/* <main className="profile-edit-main">
                <h2 className="title">Edita tu perfil de empresa</h2>
                <form className="profile-edit-form">
                    <section className="form-sections">
                        <section className="form-section">
                            <Input defaultValue={company.Nombre} className="profile-input" label="Nombre" type="text" />
                            <Input defaultValue={company.CorreoElectronico} className="profile-input" label="Correo" type="email" />
                            <Input defaultValue={company.Teléfono} className="profile-input" label="Telefono" type="tel" />
                        </section>
                        <section className="photo-section">
                            <img src={company?.Logo ? company.Logo : "/Images/user.png"} alt="" />
                            <label className="change-photo button" >
                                Cambiar imagen
                                <input type="file"accept="image/*" />
                            </label>
                        </section>
                    </section>
                </form>
                <Button content="Confirmar" />
            </main> */}
            {/* <Dialog OnSubmit={undefined} dialogRef={undefined} /> */}
        </>
    );
}
