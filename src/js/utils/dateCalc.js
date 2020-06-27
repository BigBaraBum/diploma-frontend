const today = new Date();
const sevenDaysAgo = new Date(today.getTime() - (7*24*60*60*1000));

const initialDate = () => {
    today.toISOString();
};

const finalDate = () => {
    sevenDaysAgo.toISOString();
};
