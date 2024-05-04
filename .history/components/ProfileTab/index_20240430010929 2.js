import styles from './ProfileTab.module.css';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ProfileTab() {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
    <>
        
    </>
    )
}