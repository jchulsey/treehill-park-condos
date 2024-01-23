const articles = [
    { title: 'Article I: Definitions', id: 1 },
    { title: 'Article II: Property Rights', id: 2 },
    { title: 'Article III: Membership and Voting Rights', id: 3 },
    { title: 'Article IV: Covenant for Maintenance and Assessments', id: 4 },
    { title: 'Article V: Architectural Control', id: 5 },
    { title: 'Article VI: General Provisions', id: 6 },
    { title: 'Article VII: Exterior Maintenance', id: 7 },
    { title: 'Article VIII: Use Restrictions', id: 8 },
    { title: 'Article IX: Party Walls', id: 9 },
    { title: 'Article X: Insurance', id: 10 },
];

const tableOfContents = articles.map(article =>
    <li key = { article.id }>
        { article.title }
    </li>
);

return(
    <ul> { tableOfContents } </ul>
)