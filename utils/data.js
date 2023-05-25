
const users = [
    {
        username: "Johndoe",
        email: "Johndoe@gmail.com",
        thoughts: []
    },
    {
        username: "Maryjane",
        email: "Maryjane@gmail.com",
        thoughts: []
    },
    {
        username: "Bonbonbon",
        email: "Bonbonbon@gmail.com",
        thoughts: []
    },
    {
        username: "Smithbones",
        email: "Smithbones@gmail.com",
        thoughts: []
    },
    {
        username: "UpdateMeDeleteMe",
        email: "UpdateMeThenDelete@gmail.com",
        thoughts: []
    },
];

const thoughts = [
    {
        thoughtText: "Doe you like dough?",
        username: "Johndoe",
        reactions: [{ reactionBody: "Dad Jokes!", username: "Bonbonbon" }]
    },
    {
        thoughtText: "Anyone know a good massage parlor?",
        username: "Maryjane",
        reactions: [{ reactionBody: "I'll do it for $5", username: "Bonbonbon" }]
    },
    {
        thoughtText: "BonBonBonBon... BonBon?",
        username: "Bonbonbon",
        reactions: [{ reactionBody: "Bonbonbon?", username: "Bonbonbon" }]
    },
    {
        thoughtText: "This Bonbon guy is reacting to himself",
        username: "Smithbones",
        reactions: [{ reactionBody: "bon?", username: "Bonbonbon" }]
    },
    {
        thoughtText: "Update Me then Delete",
        username: "UpdateMeDeleteMe",
        reactions: [{ reactionBody: "Update then Delete?", username: "Bonbonbon" }]
    },
];

module.exports = { users, thoughts };