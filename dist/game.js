"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchFlagsWithCountryNames = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const countries = yield response.json();
        const flagsWithCountryNames = countries.map((country) => ({
            flag: country.flags.svg,
            name: country.name.common,
        }));
        console.log(flagsWithCountryNames);
    }
    catch (error) {
        console.error('Error fetching flags:', error);
    }
});
fetchFlagsWithCountryNames();
