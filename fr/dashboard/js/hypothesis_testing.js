var jStat = require('jStat').jStat;


var rate_data_example = {
                        'A' : {'num_impressions': 1000, 'num_donations': 500},
                        'B' : {'num_impressions': 1000, 'num_donations': 500}
                        }


var get_p_dist = function(num_conversions, num_impressions, num_samples){
    if (typeof(num_samples)==='undefined') num_samples = 20000;
    p_dist = [];
    for (var i = 0;i < num_samples;i++){
        p_dist.push(jStat.beta.sample(num_conversions+1, num_impressions-num_conversions+1));
    }
    return p_dist;
}


     50000)

var rate_comparison = function(rate_data, conf){
    if (typeof(conf)==='undefined') conf = 95;

    rate_dists = {}

    for (name in rate_data){
        rate_dists[name] = 
    }

}