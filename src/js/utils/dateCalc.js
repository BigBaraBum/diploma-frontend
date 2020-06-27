const today = new Date();
const sevenDaysAgo = new Date(today.getTime() - (7*24*60*60*1000));

const finalDate = () => {
    today.toISOString();
};

const initialDate = () => {
    sevenDaysAgo.toISOString();
};
