# About

MesureTech converts units of measurement and explains what they stand for.

## Where do the values come from?

Each unit is defined by **a single exact value**, expressed in the base unit of its quantity (the meter, the kilogram, the joule…). These values come from the reference texts:

- the International System of Units, published by the International Bureau of Weights and Measures (BIPM), 2019 edition;
- the 1959 international yard and pound agreement, which sets the inch at 2.54 cm and the pound at 0.453 592 37 kg;
- the legal definitions of the US gallon (231 cubic inches) and the imperial gallon (4.546 09 L).

A conversion always goes through the base unit: the value is multiplied by the factor of the source unit, then divided by the factor of the target unit. Cases that are not proportional (temperatures, miles per gallon) use their own formulas.

## Precision

Results are computed with floating-point numbers and displayed with at most 15 significant digits. That is enough for an integer such as 2⁴⁰ = 1,099,511,627,776, and enough to hide the computer's internal rounding. A test suite checks known values (1 mile = 1,609.344 m, −40 °C = −40 °F, 1 GiB = 1,073,741,824 bytes…) and round trips between every pair of units.

## Privacy

The site sets no cookies and sends nothing to a server. Your last chosen units are stored in your browser, only to offer them again.
