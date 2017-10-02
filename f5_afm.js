/*
 * library to manage AFM address lists
 *
 */

var api = require('./f5_api');
var exports = module.exports = {};
var server = "127.0.0.1";
var addressList = "~Common~apm_address_list";
var afmAddressListUrl = "https://"+server+"/mgmt/tm/security/firewall/address-list/"+addressList;


/**
  * get address list
  * @param {String} list
  * @return {Object} data
  */
exports.getAddressList = function(list, callback) {
	var addressList = "~Common~" + list;
	var afmAddressListUrl = "https://"+server+"/mgmt/tm/security/firewall/address-list/"+addressList;
	api.get(afmAddressListUrl, "", function(res) {
	//f5.get(function(callback) {
		callback(res.addresses);
	});
};

/**
  * add address to address list
  *
  * @param {String} address
  * @param {String} list
  * @return {Object} data
  */
exports.addAddress = function(address, list, callback) {
	var addressList = "~Common~" + list;
	var afmAddressListUrl = "https://"+server+"/mgmt/tm/security/firewall/address-list/"+addressList;
	api.put(afmAddressListUrl, "", address, function(res) {
		callback(res.addresses);
	});
};

/**
  * delete address from address list
  *
  * @param {String} address
  * @param {String} list
  * @return {Object} data
  */
exports.deleteAddress = function(address, list, callback) {
	var addressList = "~Common~" + list;
	var afmAddressListUrl = "https://"+server+"/mgmt/tm/security/firewall/address-list/"+addressList;
	api.delete(afmAddressListUrl, "", address, function(res) {
		callback(res.addresses);
	});
};

