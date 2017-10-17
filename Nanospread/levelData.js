var levelData = [
    {
        level:0,
        grid:[
            [ -1,  3,  4,  0, 14, 15, 16, 17, 17, 17],
            [  1,  3,  4,  0, 13, 14, 15, 16,  0, 17],
            [  1,  3,  4,  0, 12, 13, 14, 15,  0, 17],
            [  5,  5,  5,  0, 11, 12, 13, 14,  0, 17],
            [  6,  6,  6,  0, 10, 11, 12, 13,  0, 18],
            [  7,  7,  7,  0,  9, 10, 11, 12,  0, 18],
            [  7,  7,  7,  0,  9,  9, 10, 11,  0, 18],
            [  8,  0,  8,  9,  9,  0,  0,  0,  0, 18],
            [ 25,  0,  0,  0,  0, 23, 22, 21,  0, 18],
            [ 24,  0,  0,  0,  0, 22, 21, 20,  0, 18],
            [ 24, 23, 23, 22, 22, 21, 20, 19, 19, 18]]
    },
    {
        level:1,
        grid: [
            [ -1,  3,  4,  6,  6,  7,  7,  0,  0,  0],
            [  1,  3,  4,  0,  7,  7,  8,  0,  0,  0],
            [  1,  3,  4,  0,  7,  8,  9, 18, 18, 18],
            [ 10,  0,  0,  0, 13,  0,  0, 18, 18, 18],
            [ 10, 11, 11,  0, 13, 14, 14, 18, 18, 18],
            [ 11, 11, 12,  0, 14, 14, 15,  0, 24, 24],
            [ 11, 12, 12,  0, 14, 15, 16,  0, 23, 23],
            [  0,  0, 17,  0,  0,  0,  0,  0, 22, 22],
            [  0,  0, 17, 18, 18, 21, 21, 22, 22,  0],
            [  0,  0, 18, 18, 19,  0, 21, 22,  0,  0],
            [  0,  0, 18, 19, 20,  0,  0,  0,  0,  0]]
    },
    {
        level:2,
        grid: [
            [ -1,  3,  3,  0,  0,  0, 14, 14, 15, 16,  0,  0,  0],
            [  1,  8,  4,  0,  0,  0, 14, 20, 20, 16,  0,  0,  0],
            [  2,  8,  4,  0,  0,  0, 14, 14, 15, 15, 17, 17, 17],
            [  4,  0,  5,  6,  6,  7,  8,  0,  0,  0, 18, 23, 18],
            [ 23,  0,  0,  6, 13, 13,  9,  0,  0,  0, 18, 23, 19],
            [ 23,  0,  0,  7,  7,  8,  9, 12, 12, 12, 18, 19, 19],
            [ 11, 11, 10, 10,  0,  0,  0, 13, 17, 13,  0,  0,  0],
            [ 12, 16, 16, 10,  0,  0,  0, 13, 17, 14,  0,  0,  0],
            [ 12, 12, 11, 10,  0,  0,  0,  0, 14, 14,  0,  0,  0]]
    },
    {
        level:3,
        grid: [
            [ -1, 15,  5,  5,  5,  6,  6,  6,  6,  7, 13,  7],
            [  1, 14,  5,  0,  0,  0, 17, 16, 15,  7,  0,  7],
            [  2, 13,  4,  0,  0,  0,  8,  8,  8,  8, 14,  8],
            [  2, 12,  4,  0,  0,  0,  9,  0,  0,  0,  0,  0],
            [  2, 11,  4, 18, 17,  0,  9, 21, 11, 12, 12, 12],
            [  3, 10,  4, 19, 16,  0,  9, 20, 11,  0, 12, 12],
            [  3,  3,  3, 20, 16,  0,  9, 19, 11,  0, 13, 13],
            [  6,  6,  6, 21, 16,  0, 10, 18, 11,  0, 13, 13],
            [  9,  9,  9, 22, 15,  0, 10, 10, 10,  0, 13, 13],
            [  0,  0,  0, 23, 15,  0,  0,  0,  0, 13, 13, 13],
            [  0,  0,  0, 24, 15, 15, 14, 14, 14, 14,  0,  0]]
    },
    {
        level:4,
        grid: [
            [ -1,  2,  2, 23, 22, 21, 20,  0,  0,  0],
            [  1,  2,  3,  0, 19, 18, 16, 16, 17, 18],
            [  2,  2,  3,  0, 19, 18, 15, 15,  0, 17],
            [  4,  0,  0,  0,  0,  0, 14, 14,  0, 17],
            [  4,  5,  0,  0, 10, 10,  0, 14, 13, 13],
            [  0,  5,  7, 12,  9, 10,  0, 14, 13, 13],
            [  0,  5,  7, 12,  9, 11, 11,  0,  0, 12],
            [  8,  6,  0,  0,  9,  0, 11, 11, 11, 12],
            [  8,  6,  7,  7,  8,  9, 14, 11, 11,  0],
            [  9,  6,  8,  7,  8,  9, 14, 11, 11,  0],
            [  9,  6,  8,  0,  0,  0,  0,  0,  0,  0]]
    },
    {
        level:5,
        grid: [
            [ -1,  2,  2,  3,  3,  4,  5,  6,  7,  7,  8,  9],
            [  1,  2,  3,  4,  4,  5,  9,  7,  8,  8,  9, 10],
            [  3,  3,  7,  4,  4,  5,  0,  7,  8,  8,  9, 10],
            [  4,  4,  0,  5,  5,  9,  0,  8,  9,  9, 10, 11],
            [  4,  4,  0,  5,  5,  0,  0,  9,  9,  9, 10, 15],
            [  5,  5,  0,  6,  6,  0,  0, 13, 10, 10, 11,  0],
            [  9,  9,  0, 10,  6,  0,  0,  0, 10, 10, 12,  0],
            [  0,  0,  0,  0, 10,  0,  0,  0, 11, 11, 16,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0, 11, 11,  0,  0],
            [  0,  0, 12, 12, 13, 13, 14, 14, 14, 14, 14, 13],
            [ 13, 13, 16, 18, 19, 20, 21, 22, 23, 22, 21, 20]]
    },
    {
        level:6,
        grid: [
            [ -1, 24, 23, 17, 17,  3,  3,  4,  4],
            [  1,  1,  2, 17, 17,  3,  4, 19,  5],
            [  1,  2,  2,  3,  3, 14, 14,  5,  5],
            [  2, 16, 16,  3,  4, 14, 14,  5, 21],
            [  2, 16, 16, 19,  4,  5,  5,  6, 21],
            [  3,  3,  4,  4,  5,  5,  6,  6,  7],
            [  3,  4,  4, 12, 12,  6, 11, 11,  7],
            [ 15, 15,  5, 12, 12,  6, 11, 11,  8],
            [ 15, 15,  5,  6,  6,  7,  7, 10,  8],
            [  5,  5,  6, 20, 20, 22, 22,  8,  9]]
    },
    {
        level:7,
        grid: [
            [ -1,  7,  0,  0,  0, 14, 15,  0,  0, 17, 17,  0],
            [  1,  7,  7,  0,  0, 13, 13,  0, 16, 16, 17, 17],
            [  1,  7,  7,  0,  0, 13, 13, 16, 16,  0,  0, 17],
            [  2,  3,  8,  8,  0, 12, 13, 17, 17,  0,  0,  0],
            [  2,  3,  8,  8,  9, 12, 13,  0, 17, 17,  0,  0],
            [  2,  3,  0,  8,  9, 11, 12,  0, 17, 18, 18,  0],
            [  3,  4,  0,  0,  9, 11, 11,  0,  0, 18, 18,  0],
            [  4,  4,  0,  0,  9, 10, 11,  0,  0,  0, 18, 18],
            [  5,  5,  0,  0,  0, 10, 11,  0,  0,  0, 19, 19],
            [  6,  6,  0,  0,  0, 10, 11, 23, 22, 21, 19, 19],
            [  0,  0,  0,  0,  0,  0,  0,  0, 21, 20, 19,  0]]
    },
    {
        level:8,
        grid: [
            [ -1,  1,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  1,  1,  2,  2,  3,  3,  0,  0,  0,  0,  0,  0],
            [  2,  2,  2,  3,  3,  3,  3,  3,  0,  0,  0,  0],
            [ 15, 15, 15,  3,  4,  4,  4,  4,  0,  0,  0,  0],
            [ 15, 15, 15, 16, 16, 16,  4,  4,  4,  0,  0,  0],
            [ 16,  0,  0, 16, 16, 16, 16,  4,  4,  5,  0,  0],
            [ 16, 16,  0, 18,  0,  0, 17,  4,  4,  5,  0,  0],
            [ 17, 17,  0, 19,  0,  0, 13,  4,  5,  5, 15, 15],
            [ 17, 18, 22, 20,  0, 13,  7,  5,  5,  6,  8, 11],
            [  0,  0, 23, 21, 13,  7,  6,  6,  6,  7, 10, 12],
            [  0,  0, 23, 22, 13,  8,  7,  6,  7,  9, 11, 13]]
    },
	{
        level:9,
		grid: [ 
			[ -1,  2,  3,  7,  8,  0, 10, 12, 14, 15, 16,  0],
		    [  2,  3,  4,  0,  8,  9, 10,  0, 15, 16, 17,  0],
			[  3,  4,  5,  0,  9, 10, 11,  0, 16, 17, 18,  0],
			[ 15,  0,  0,  0, 18,  0, 18,  0,  0,  0, 15,  0],
			[ 16,  0,  0,  0, 19,  0, 19,  0,  0,  0, 16,  0],
			[ 16,  0,  0,  0, 19,  0, 19,  0,  0,  0, 16,  0],
			[ 17,  0,  0,  0, 20,  0, 20,  0,  0,  0, 17,  0],
			[ 17,  0,  0,  0, 20,  0, 20,  0,  0,  0, 17,  0],
			[ 17,  0,  0,  0, 22, 23, 22,  0,  0,  0, 17,  0],
			[ 18,  0,  0,  0, 23, 25, 23,  0,  0,  0, 18,  0],
			[ 18, 19, 19, 20, 25,  0, 25, 20, 19, 19, 18,  0]]
	},
    {
        level:10,
        grid: [
            [ -1,  2,  3,  4,  5,  6,  5,  4,  3,  2,  1],
            [  2,  0,  0,  0,  0,  8,  0,  0,  0,  0,  2],
            [  3,  0, 16, 14, 12, 10, 12, 14, 16,  0,  3],
            [  4,  0, 14,  0,  0, 15,  0,  0, 14,  0,  4],
            [  5,  0, 12,  0, 18, 20, 18,  0, 12,  0,  5],
            [  6,  8, 10, 15, 20, 25, 20, 15, 10,  8,  6],
            [  5,  0, 12,  0, 18, 20, 18,  0, 12,  0,  5],
            [  4,  0, 14,  0,  0, 15,  0,  0, 14,  0,  4],
            [  3,  0, 16, 14, 12, 10, 12, 14, 16,  0,  3],
            [  2,  0,  0,  0,  0,  8,  0,  0,  0,  0,  2],
            [  1,  2,  3,  4,  5,  6,  5,  4,  3,  2,  1]]
    },
	{
        level:11,
		grid: [ 
			[  0, 34,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
		    [  0, 33,  0, 15, 16, 17, 18, 19, 20, 21, 22, 23,  0, 0],
			[  0, 32,  0, 14,  0,  0,  0,  0,  0,  0,  0, 24,  0, 0],
			[  0, 31,  0, 13,  0,  0,  4,  5,  6,  7,  0, 25,  0, 0],
			[  0, 30,  0, 12,  0,  0,  3,  0,  0,  8,  0, 26,  0, 0],
			[  0, 29,  0, 11,  0,  2,  1,  2,  0,  9,  0, 27,  0, 0],
			[  0, 28,  0, 10,  0,  1, -1,  1,  0, 10,  0, 28,  0, 0],
			[  0, 27,  0,  9,  0,  2,  1,  2,  0, 11,  0, 29,  0, 0],
			[  0, 26,  0,  8,  0,  0,  3,  0,  0, 12,  0, 30,  0, 0],
			[  0, 25,  0,  7,  6,  5,  4,  0,  0, 13,  0, 31,  0, 0],
			[  0, 24,  0,  0,  0,  0,  0,  0,  0, 14,  0, 32,  0, 0],
			[  0, 23, 22, 21, 20, 19, 18, 17, 16, 15,  0, 33,  0, 0],
			[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 34,  0, 0]]
	},
	{
        level:12,
		grid: [ 
			[  0,  0,  0,  0, 21, 17, 21,  0,  0,  0,  0,  0],
		    [  0,  0, 15,  0,  0, 13,  0,  0, 12,  0,  0,  0],
			[  0, 15, 13, 13, 13,  9,  9,  9, 10, 12,  0,  0],
			[  0,  0, 12,  0,  0,  5,  0,  0, 10,  0,  0,  0],
			[ 24,  0, 12,  0,  1,  1,  2,  0, 10,  0, 22,  0],
			[ 20, 16, 12,  8,  4, -1,  2,  6, 10, 14, 18,  0],
			[ 24,  0, 12,  0,  4,  3,  3,  0, 10,  0, 22,  0],
			[  0,  0, 12,  0,  0,  7,  0,  0, 10,  0,  0,  0],
			[  0, 14, 12, 11, 11, 11, 11, 11, 11, 13,  0,  0],
			[  0,  0, 14,  0,  0, 15,  0,  0, 13,  0,  0,  0],
			[  0,  0,  0,  0, 23, 19, 23,  0,  0,  0,  0,  0]]
	},
	{
        level:13,
		grid: [ 
			[ -1,  2,  3,  0,  5,  6,  7,  0,  9, 10, 11,  0],
		    [  2,  0,  4,  5,  6,  0,  8,  9, 10,  0, 12,  0],
			[  3,  4,  5,  0,  7,  8,  9,  0, 11, 12, 13,  0],
			[  0,  5,  0,  0,  0,  9,  0,  0,  0, 13,  0,  0],
			[  5,  6,  7,  0,  9, 10, 11,  0, 13, 14, 15,  0],
			[  6,  0,  8,  9, 10,  0, 12, 13, 14,  0, 16,  0],
			[  7,  8,  9,  0, 11, 12, 13,  0, 15, 16, 17,  0],
			[  0,  9,  0,  0,  0, 13,  0,  0,  0, 17,  0,  0],
			[  9, 10, 11,  0, 13, 14, 15,  0, 17, 18, 19,  0],
			[ 10,  0, 12, 13, 14,  0, 16, 17, 18,  0, 20,  0],
			[ 11, 12, 13,  0, 15, 16, 17,  0, 19, 20, 25,  0]]
	},
	{
        level:14,
		grid: [ 
			[ -1,  2,  3,  0,  0,  0,  0,  0,  0,  9, 10, 10],
		    [  2,  0,  4,  5,  6,  7,  7,  8,  8,  9,  0, 10],
			[  3,  4,  0,  0,  0, 15, 15,  0,  0,  0, 11, 11],
			[  0,  5,  0, 10, 11, 12, 12, 11, 10,  0, 12,  0],
			[  0,  6,  0, 11,  0, 20, 20,  0, 11,  0, 12,  0],
			[  0,  7, 10, 12, 18, 25, 25, 18, 12, 10, 12,  0],
			[  0,  7,  0, 11,  0, 20, 20,  0, 11,  0, 13,  0],
			[  0,  8,  0, 10, 11, 12, 12, 11, 10,  0, 13,  0],
			[  9,  8,  0,  0,  0, 15, 15,  0,  0,  0, 14, 14],
			[  9,  0, 11, 11, 12, 12, 13, 13, 13, 14,  0, 15],
			[ 10, 10, 10,  0,  0,  0,  0,  0,  0, 14, 15, 15]]
	},
	{
        level:15,
		grid: [ 
			[  0,  0,  0,  0,  0, 25,  0,  0,  0,  0,  0,  0],
		    [  0,  0,  0,  0, 23,  3, 23,  0,  0,  0,  0,  0],
			[  0,  0,  0, 21,  3,  0,  3, 21,  0,  0,  0,  0],
			[  0,  0, 20,  3,  3,  3,  3,  3, 20,  0,  0,  0],
			[  0, 19, 10,  8,  8,  8,  8,  8, 10, 19,  0,  0],
			[  0,  0, 10,  3,  3,  3,  3,  3, 10,  0,  0,  0],
			[  0,  0, 10,  3,  3,  3,  3,  3, 10,  0,  0,  0],
			[  0,  0, 10,  3,  8,  8,  8,  3, 10,  0,  0,  0],
			[  0,  0, 10,  3,  8, -1,  8,  3, 10,  0,  0,  0],
			[  0,  0, 10,  3,  8,  1,  8,  3, 10,  0,  0,  0],
			[  0,  0, 10,  3,  8,  1,  8,  3, 10,  0,  0,  0]]
	},
	{
        level:16,
		grid: [ 
			[  0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0],
		    [  0,  0,  0,  0,  0,  5,  2,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0,  5,  2,  2,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0,  5,  2,  2,  2,  0,  0,  0],
			[  0,  0,  0,  0,  0,  5,  0,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0,  5,  0,  0,  0,  0,  0,  0],
			[  0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0],
			[  0, 10,  5,  5,  5,  5,  5,  5,  5, 10,  0,  0],
			[ 23, 20, 10,  5,  5,  5,  5,  5, 10, 20, 23,  0],
			[ 25, 23, 20, 10, 10, 10, 10, 10, 20, 23, 25,  0],
			[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]]
	},
	{
        level:100,
		grid: [ 
			[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0,  2,  0,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0, 25,  0,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
			[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]]
	}
];

// grid: [ Empty Grid
//     [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]]