import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe('CalculatorService', () => {

    let calc : CalculatorService;
    let loggerSpy: any;
    let tb : TestBed;

    beforeEach(()=>{
        console.log("Calling beforeEach()");
        // const logger = new LoggerService(); // Bad to do, since it can cause failures when the CalculatorService is intended to just be tested
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        calc = new CalculatorService(loggerSpy);

        
    });

    it('should add 2 numbers', () => {
        console.log('should add 2 numbers');
        const res = calc.add(2, 6);
        expect(res).toBe(8);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
    
    it('should subtract 2 numbers', () => {
        console.log('should subtract 2 numbers');
        const res = calc.subtract(2, 6);
        expect(res).toBe(-4, "unexpected subtraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
});