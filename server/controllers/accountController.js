function account(req, res) {
    const exerciseData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Exercises Completed',
            data: [10, 20, 30, 25],
            backgroundColor: 'rgba(78, 14, 255, 0.5)',
            borderColor: 'rgb(78, 14, 255)',
            borderWidth: 2,
          },
        ],
      };
    
      res.render('account', { exerciseData });
};


module.exports = account;