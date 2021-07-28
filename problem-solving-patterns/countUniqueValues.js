const countUniqueValues = arr => {}

export default countUniqueValues

/*
11223


j = 0
i = 0
11223
--
same

j = 1
i = 0
11223
--
same

j = 2
i = 0
11223
--
i = 1
12223

j = 3
i = 1
12223
--
same

j = 4
i = 1
12223
--
i = 2
12323

It's reusing the array to add results
*/
