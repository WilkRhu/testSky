const setTimeout = function() {
    return global.setTimeout.apply(global, arguments);
};

module.exports = setTimeout;
