import retry from './retry';
import rest from 'lodash/rest';

export default function (opts, task) {
    return rest(function (args) {
        var callback = args.pop();
        retry(opts, function (cb) {
            task.apply(null, args.concat([cb]));
        }, callback);
    });
}