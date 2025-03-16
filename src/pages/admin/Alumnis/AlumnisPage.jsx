import React from 'react'
import AlumnisHeader from '../../../components/admin/Alumnis/AlumnisHeader/AlumnisHeader'
import AlumnisCompanies from '../../../components/admin/Alumnis/AlumnisCompanies/AlumnisCompanies'
import styles from "./AlumnisPage.module.scss"
import FutureBuilders from '../../../components/admin/Alumnis/FutureBuilders/FutureBuilders'
import Portfolio from '../../../components/admin/Alumnis/Portfolio/Portfolio'

const AlumnisPage = () => {
    return (
        <div className={styles.alumnisPage}>
            <AlumnisHeader />
            <AlumnisCompanies />
            <FutureBuilders />
            <Portfolio />
        </div>
    )
}

export default AlumnisPage