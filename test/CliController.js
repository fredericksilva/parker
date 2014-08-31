/*! Parker v0.1.0 - MIT license */

var chai = require('chai'),
    expect = require('chai').expect,
    CliController = require('../lib/CliController.js'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('The CLI Controller', function() {
    it('responds to a -v switch by dispatching a version event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('showVersion', callback);
        cliController.dispatch({'v': true});
        expect(callback).to.have.been.called;
    });

    it('responds to a --version switch by dispatching a version event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('showVersion', callback);
        cliController.dispatch({'version': true});
        expect(callback).to.have.been.called;
    });

    it('responds to a -h switch by dispatching a version event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('showHelp', callback);
        cliController.dispatch({'h': true});
        expect(callback).to.have.been.called;
    });

    it('responds to a --help switch by dispatching a version event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('showHelp', callback);
        cliController.dispatch({'help': true});
        expect(callback).to.have.been.called;
    });

    it('responds to a -h switch by dispatching a help event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('showHelp', callback);
        cliController.dispatch({'h': true});
        expect(callback).to.have.been.called;
    });

    it('responds to a --help switch by dispatching a help event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('showHelp', callback);
        cliController.dispatch({'h': true});
        expect(callback).to.have.been.called;
    });

    it('responds to a -f switch by dispatching a format event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('setFormat', callback);
        cliController.dispatch({'f': 'json'});
        expect(callback).to.have.been.calledWith('json');
    });

    it('responds to a --format switch by dispatching a format event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('setFormat', callback);
        cliController.dispatch({'format': 'json'});
        expect(callback).to.have.been.calledWith('json');
    });

    it('responds to a --warning-figures switch by dispatching a warning figures event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('setWarningFigures', callback);
        cliController.dispatch({'warning-figures': 'strict'});
        expect(callback).to.have.been.calledWith('strict');
    });

    it('responds to a --strict switch by dispatching a warning figures event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('setWarningFigures', callback);
        cliController.dispatch({'strict': true});
        expect(callback).to.have.been.calledWith('strict');
    });

    it('responds to a --surpress-colours switch by dispatching a setSurpressColours event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('setSurpressColours', callback);
        cliController.dispatch({'surpress-colours': true});
        expect(callback).to.have.been.called;
    });

    it('responds to no data supplied by dispatching a help event', function () {
        var callback = sinon.spy(),
            cliController = new CliController();

        cliController.on('showHelp', callback);
        cliController.dispatch({});
        expect(callback).to.have.been.called;
    });

    it('responds to unnamed arguments by dispatching file event, then a run event', function () {
        var pathsCallback = sinon.spy(),
            cliController = new CliController();

        cliController.on('runPaths', pathsCallback);
        cliController.dispatch({'_': ['styles.css', 'ie.css']});
        expect(pathsCallback).to.have.been.calledWith(['styles.css', 'ie.css']);
    });
});
