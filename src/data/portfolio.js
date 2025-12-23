// Portfolio folder structure
const portfolioStructure = {
    name: 'src/images',
    path: [],
    folders: [
        {
            name: 'Personal Branding',
            description: 'Personal Brand Photography And Portraits',
            coverImage: 'src/images/Personal Branding/James - Realtor Branding/JRB1.jpg',
            folders: [
                {
                    name: 'James - Realtor Branding',
                    description: 'Real Estate Professional Branding',
                    images: Array.from({length: 9}, (_, i) => ({
                        src: `src/images/Personal Branding/James - Realtor Branding/JRB${i + 1}.jpg`,
                        alt: `James Realtor Branding ${i + 1}`
                    }))
                },
                {
                    name: 'Sunday - Album Visuals',
                    description: 'Album Cover And Promotional Photography',
                    images: Array.from({length: 6}, (_, i) => ({
                        src: `src/images/Personal Branding/Sunday - Album Visuals/SBA${i + 1}.jpg`,
                        alt: `Sunday Album Visuals ${i + 1}`
                    }))
                }
            ]
        },
        {
            name: 'Brands & Campaigns - Organizations',
            description: 'Organizational Branding And Leadership Photography',
            coverImage: 'src/images/Brands & Campaigns - Organizations/VCPE - Leadership Branding/VLB3.jpg',
            folders: [
                {
                    name: 'E-Club - Leadership Branding',
                    description: 'Leadership Brand Photography',
                    images: Array.from({length: 8}, (_, i) => ({
                        src: `src/images/Brands & Campaigns - Organizations/E-Club - Leadership Branding/ECLB${i + 1}.jpg`,
                        alt: `E-Club Leadership Branding ${i + 1}`
                    }))
                },
                {
                    name: 'Enactus - Leadership Branding',
                    description: 'Leadership Photography',
                    images: Array.from({length: 7}, (_, i) => ({
                        src: `src/images/Brands & Campaigns - Organizations/Enactus - Leadership Branding/ELB${i + 1}.jpg`,
                        alt: `Enactus Leadership Branding ${i + 1}`
                    }))
                },
                {
                    name: 'ICA - Leadership Branding',
                    description: 'Professional Leadership Shots',
                    images: Array.from({length: 7}, (_, i) => ({
                        src: `src/images/Brands & Campaigns - Organizations/ICA - Leadership Branding/ILB${i + 1}.jpg`,
                        alt: `ICA Leadership Branding ${i + 1}`
                    }))
                },
                {
                    name: 'VCPE - Leadership Branding',
                    description: 'Leadership Brand Photography',
                    images: Array.from({length: 8}, (_, i) => ({
                        src: `src/images/Brands & Campaigns - Organizations/VCPE - Leadership Branding/VLB${i + 1}.jpg`,
                        alt: `VCPE Leadership Branding ${i + 1}`
                    }))
                }
            ]
        },
        {
            name: 'Brands & Campaigns - Fashion & Lifestyle',
            description: 'Fashion And Lifestyle Brand Photography',
            coverImage: 'src/images/Brands & Campaigns - Fashion & Lifestyle/AZACH - Editorial Campaign/AEC1.jpg',
            folders: [
                {
                    name: 'AZACH - Editorial Campaign',
                    description: 'Editorial Fashion Campaign',
                    images: Array.from({length: 10}, (_, i) => ({
                        src: `src/images/Brands & Campaigns - Fashion & Lifestyle/AZACH - Editorial Campaign/AEC${i + 1}.jpg`,
                        alt: `AZACH Editorial Campaign ${i + 1}`
                    }))
                },
                {
                    name: 'ERO - Product Campaign',
                    description: 'Product Photography Campaign',
                    images: Array.from({length: 13}, (_, i) => ({
                        src: `src/images/Brands & Campaigns - Fashion & Lifestyle/ERO - Product Campaign/EPC${i + 1}.jpg`,
                        alt: `ERO Product Campaign ${i + 1}`
                    }))
                },
                {
                    name: 'FORUM VONDU - Lifestyle Campaign',
                    description: 'Lifestyle Brand Photography',
                    images: Array.from({length: 11}, (_, i) => ({
                        src: `src/images/Brands & Campaigns - Fashion & Lifestyle/FORUM VONDU - Lifestyle Campaign/FVLC${i + 1}.jpg`,
                        alt: `FORUM VONDU Lifestyle Campaign ${i + 1}`
                    }))
                },
                {
                    name: 'OUR WORLD - Lifestyle Campaign',
                    description: 'Lifestyle Photography',
                    images: Array.from({length: 9}, (_, i) => ({
                        src: `src/images/Brands & Campaigns - Fashion & Lifestyle/OUR WORLD - Lifestyle Campaign/OWLC${i + 1}.jpg`,
                        alt: `OUR WORLD Lifestyle Campaign ${i + 1}`
                    }))
                }
            ]
        }
    ]
};
