import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const ProjectResources = () => {
    return (
        <Link href="https://github.com/narayan-raghuwanshi/managewise-replica" target='_blank' className="bg-white rounded-full border-4 border-gray-800 fixed bottom-20 right-20">
            <FaGithub size={40} />
        </Link>
    )
}

export default ProjectResources