


export default function PersonDetail({name}) {
    const peopleDetails = {
        'Rahul Kapoor': {
            qualification: 'M.Sc. in Computer Science',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            description: 'John is a seasoned software engineer with over 10 years of experience.'
        },
        'Jane Smith': {
            qualification: 'MBA in Finance',
            linkedin: 'https://www.linkedin.com/in/janesmith',
            description: 'Jane is a financial analyst with a strong background in corporate finance.'
        },
    };

    return (
        <div >
            <h1 className="group">Author {name}</h1>
            <div className="hidden group-hover:block">
                <h2>{name}</h2>
                {/* <p><strong>Qualification:</strong> {peopleDetails.name.qualification}</p>
                <p><strong>LinkedIn:</strong> <a href={peopleDetails.name.linkedin} target="_blank" rel="noopener noreferrer">{person.linkedin}</a></p>
                <p><strong>Description:</strong> {peopleDetails.name.description}</p> */}
            </div>
        </div>
    )
}
