
/* const mockData = {
  categories: {
    byId: {
      1: {
        id: 1,
        title: 'Category',
        color: 'red',
        name: 'Data Pre-processing',
        selected: false,
        subCategories: [11, 12, 13, 14]
      },
      2: {
        id: 2,
        title: 'Category',
        color: 'green',
        name: 'Variant Discovery',
        selected: false,
        subCategories: [21, 22, 23]
      },
      3: {
        id: 3,
        title: 'Category',
        color: 'green',
        name: 'Variant Refinement',
        selected: false,
        subCategories: [31, 32, 33]
      },
      4: {
        id: 4,
        title: 'Category',
        color: 'green',
        name: 'Phenotype Interpretation',
        selected: false,
        subCategories: [41, 42, 43, 44, 45, 46, 47]
      },
    },
    allIds: [1, 2, 3, 4]
  },
  subCategories: {
    byId: {
      11: {
        id: 11,
        parentId: 1,
        title: 'Subcategory',
        color: 'green',
        name: 'Reference Mapping: Genome',
        selected: false,
        items: [111]
      },
      12: {
        id: 12,
        parentId: 1,
        title: 'Subcategory',
        color: 'blue',
        name: 'Reference Mapping: Transcriptome',
        selected: false,
        items: [121, 122]
      },
      13: {
        id: 13,
        parentId: 1,
        title: 'Subcategory',
        color: 'yellow',
        name: 'Reference Mapping: Epigenome',
        selected: false,
        items: [131]
      },
      14: {
        id: 14,
        parentId: 1,
        title: 'Subcategory',
        color: 'gray',
        name: 'Reference Assembly Coordinates',
        selected: false,
        items: [141, 142, 143]
      },
      21: {
        id: 21,
        parentId: 2,
        title: 'Subcategory',
        color: 'red',
        name: 'Variant Calling',
        selected: false,
        items: [211, 212]
      },
      22: {
        id: 22,
        parentId: 2,
        title: 'Subcategory',
        color: 'red',
        name: 'Variant Annotation',
        selected: false,
        items: [221, 222, 223]
      },
      23: {
        id: 23,
        parentId: 2,
        title: 'Subcategory',
        color: 'red',
        name: 'Variant Filtering',
        selected: false,
        items: [231]
      },
      31: {
        id: 31,
        parentId: 3,
        title: 'Subcategory',
        color: 'red',
        name: 'Functional Groupings',
        selected: false,
        items: [311]
      },
      32: {
        id: 32,
        parentId: 3,
        title: 'Subcategory',
        color: 'blue',
        name: 'Haplotypes',
        selected: false,
        items: [321]
      },
      33: {
        id: 33,
        parentId: 3,
        title: 'Subcategory',
        color: 'red',
        name: 'Callset Evaluation',
        selected: false,
        items: [331]
      },
      41: {
        id: 41,
        parentId: 4,
        title: 'Subcategory',
        color: 'red',
        name: 'Disease Ontology',
        selected: false,
        items: [411]
      },
      42: {
        id: 42,
        parentId: 4,
        title: 'Subcategory',
        color: 'blue',
        name: 'Drug Ontology',
        selected: false,
        items: [421]
      },
      43: {
        id: 43,
        parentId: 4,
        title: 'Subcategory',
        color: 'blue',
        name: 'Clinical Guidelines',
        selected: false,
        items: [431, 432]
      },
      44: {
        id: 44,
        parentId: 4,
        title: 'Subcategory',
        color: 'yellow',
        name: 'Disease Onset and Progression',
        selected: false,
        items: [441]
      },
      45: {
        id: 45,
        parentId: 4,
        title: 'Subcategory',
        color: 'red',
        name: 'Test Recommendations',
        selected: false,
        items: [451]
      },
      46: {
        id: 46,
        parentId: 4,
        title: 'Subcategory',
        color: 'red',
        name: 'Risks',
        selected: false,
        items: [461]
      },
      47: {
        id: 47,
        parentId: 4,
        title: 'Subcategory',
        color: 'blue',
        name: 'Drug Interactions',
        selected: false,
        items: [471, 472]
      },
    },
    allIds: [11, 12, 13, 14, 21, 22, 23, 31, 32, 33, 41, 42, 43, 44, 45, 46, 47]
  },
  items: {
    byId: {
      111: {
        id: 111,
        parentId: 11,
        title: 'Item',
        color: 'red',
        name: 'Burrows Wheeler Aligner (BWA)',
        selected: false,
        multiSelect: false,
      },
      121: {
        id: 121,
        parentId: 12,
        title: 'Item',
        color: 'green',
        name: 'Bowtie2',
        selected: false,
        multiSelect: false,
      },
      122: {
        id: 122,
        parentId: 12,
        title: 'Item',
        color: 'blue',
        name: 'HISAT2',
        selected: false,
        multiSelect: false,
      },
      131: {
        id: 131,
        parentId: 13,
        title: 'Item',
        color: 'green',
        name: 'Bismark',
        selected: false,
        multiSelect: false,
      },
      141: {
        id: 141,
        parentId: 14,
        title: 'Item',
        color: 'green',
        name: 'NCBI Remap',
        selected: false,
        multiSelect: false,
      },
      142: {
        id: 142,
        parentId: 14,
        title: 'Item',
        color: 'red',
        name: 'UCSC Liftover',
        selected: false,
        multiSelect: false,
      },
      143: {
        id: 143,
        parentId: 14,
        title: 'Item',
        color: 'blue',
        name: 'Ensembl Assembly Converter',
        selected: false,
        multiSelect: false,
      },
      211: {
        id: 211,
        parentId: 21,
        title: 'Item',
        color: 'blue',
        name: 'FreeBayes',
        selected: false,
        multiSelect: false
      },
      212: {
        id: 212,
        parentId: 21,
        title: 'Item',
        color: 'yellow',
        name: 'GATK 4',
        selected: false,
        multiSelect: false
      },
      221: {
        id: 221,
        parentId: 22,
        title: 'Item',
        color: 'green',
        name: 'ANNOVAR',
        selected: false,
        multiSelect: true
      },
      222: {
        id: 222,
        parentId: 22,
        title: 'Item',
        color: 'red',
        name: 'Ensembl',
        selected: false,
        multiSelect: true
      },
      223: {
        id: 223,
        parentId: 22,
        title: 'Item',
        color: 'gray',
        name: 'NCBI Gene',
        selected: false,
        multiSelect: true
      },
      231: {
        id: 231,
        parentId: 23,
        title: 'Item',
        color: 'green',
        name: 'Placeholder',
        selected: false,
        multiSelect: false
      },
      311: {
        id: 311,
        parentId: 31,
        title: 'Item',
        color: 'gray',
        name: 'Placeholder',
        selected: false,
        multiSelect: false
      },
      321: {
        id: 321,
        parentId: 32,
        title: 'Item',
        color: 'yellow',
        name: 'Placeholder',
        selected: false,
        multiSelect: false
      },
      331: {
        id: 331,
        parentId: 33,
        title: 'Item',
        color: 'blue',
        name: 'Placeholder',
        selected: false,
        multiSelect: false
      },
      411: {
        id: 411,
        parentId: 41,
        title: 'Item',
        color: 'gray',
        name: 'SNOMED CT',
        selected: false,
        multiSelect: false
      },
      421: {
        id: 421,
        parentId: 42,
        title: 'Item',
        color: 'green',
        name: 'RxNorm',
        selected: false,
        multiSelect: false
      },
      431: {
        id: 431,
        parentId: 43,
        title: 'Item',
        color: 'red',
        name: 'ACMG-AMP',
        selected: false,
        multiSelect: false
      },
      432: {
        id: 432,
        parentId: 43,
        title: 'Item',
        color: 'yellow',
        name: 'Sherloc',
        selected: false,
        multiSelect: false
      },
      441: {
        id: 441,
        parentId: 44,
        title: 'Item',
        color: 'green',
        name: 'Placeholder',
        selected: false,
        multiSelect: false
      },
      451: {
        id: 451,
        parentId: 45,
        title: 'Item',
        color: 'blue',
        name: 'NCBI GTR',
        selected: false,
        multiSelect: false
      },
      461: {
        id: 461,
        parentId: 46,
        title: 'Item',
        color: 'green',
        name: 'ClinVar',
        selected: false,
        multiSelect: true
      },
      471: {
        id: 471,
        parentId: 47,
        title: 'Item',
        color: 'red',
        name: 'Drugbank',
        selected: false,
        multiSelect: true
      },
      472: {
        id: 472,
        parentId: 47,
        title: 'Item',
        color: 'red',
        name: 'DGI',
        selected: false,
        multiSelect: true
      },
    },
    allIds: [111, 121, 122, 131, 141, 142, 143, 211, 212, 221, 222, 223, 231, 311, 321, 331, 411, 421, 431, 432, 441, 451, 461, 471, 472]
  }
  relationships: {
    byId: {
      1: {
        id: 1,
        categoryId: 1,
        subcategoryId: 11
      },
      2: {
        id: 2,
        categoryId: 1,
        subcategoryId: 11
      }
    }
  }
}; */

const mockData = [
  {
    id: '1',
    title: 'Category',
    color: 'red',
    name: 'Data Pre-processing',
    selected: false,
    recommended: true
  },

  {
    id: '11',
    parentId: '1',
    title: 'Subcategory',
    color: 'green',
    name: 'Reference Mapping: Genome',
    selected: false
  },
  {
    id: '111',
    parentId: '11',
    title: 'Item',
    color: 'red',
    name: 'Burrows Wheeler Aligner (BWA)',
    selected: false,
    multiSelect: false
  },

  {
    id: '12',
    parentId: '1',
    title: 'Subcategory',
    color: 'blue',
    name: 'Reference Mapping: Transcriptome',
    selected: false,
    recommended: true
  },
  {
    id: '121',
    parentId: '12',
    title: 'Item',
    color: 'green',
    name: 'Bowtie2',
    selected: false,
    multiSelect: false
  },
  {
    id: '122',
    parentId: '12',
    title: 'Item',
    color: 'blue',
    name: 'HISAT2',
    selected: false,
    multiSelect: false
  },

  {
    id: '13',
    parentId: '1',
    title: 'Subcategory',
    color: 'yellow',
    name: 'Reference Mapping: Epigenome',
    selected: false
  },
  {
    id: '131',
    parentId: '13',
    title: 'Item',
    color: 'green',
    name: 'Bismark',
    selected: false,
    multiSelect: false
  },

  {
    id: '14',
    parentId: '1',
    title: 'Subcategory',
    color: 'gray',
    name: 'Reference Assembly Coordinates',
    selected: false
  },
  {
    id: '141',
    parentId: '14',
    title: 'Item',
    color: 'green',
    name: 'NCBI Remap',
    selected: false,
    multiSelect: false
  },
  {
    id: '142',
    parentId: '14',
    title: 'Item',
    color: 'red',
    name: 'UCSC Liftover',
    selected: false,
    multiSelect: false
  },
  {
    id: '143',
    parentId: '14',
    title: 'Item',
    color: 'blue',
    name: 'Ensembl Assembly Converter',
    selected: false,
    multiSelect: false
  },


  {
    id: '2',
    title: 'Category',
    color: 'green',
    name: 'Variant Discovery',
    selected: false
  },

  {
    id: '21',
    parentId: '2',
    title: 'Subcategory',
    color: 'red',
    name: 'Variant Calling',
    selected: false,
    recommended: true
  },
  {
    id: '211',
    parentId: '21',
    title: 'Item',
    color: 'blue',
    name: 'FreeBayes',
    selected: false,
    multiSelect: false
  },
  {
    id: '212',
    parentId: '21',
    title: 'Item',
    color: 'yellow',
    name: 'GATK 4',
    selected: false,
    multiSelect: false,
    recommended: true
  },

  {
    id: '22',
    parentId: '2',
    title: 'Subcategory',
    color: 'red',
    name: 'Variant Annotation',
    selected: false
  },
  {
    id: '221',
    parentId: '22',
    title: 'Item',
    color: 'green',
    name: 'ANNOVAR',
    selected: false,
    multiSelect: true
  },
  {
    id: '222',
    parentId: '22',
    title: 'Item',
    color: 'red',
    name: 'Ensembl',
    selected: false,
    multiSelect: true
  },
  {
    id: '223',
    parentId: '22',
    title: 'Item',
    color: 'gray',
    name: 'NCBI Gene',
    selected: false,
    multiSelect: true
  },

  {
    id: '23',
    parentId: '2',
    title: 'Subcategory',
    color: 'red',
    name: 'Variant Filtering',
    selected: false
  },
  {
    id: '231',
    parentId: '23',
    title: 'Item',
    color: 'green',
    name: 'Placeholder',
    selected: false,
    multiSelect: false
  },


  {
    id: '3',
    title: 'Category',
    color: 'green',
    name: 'Variant Refinement',
    selected: false
  },

  {
    id: '31',
    parentId: '3',
    title: 'Subcategory',
    color: 'red',
    name: 'Functional Groupings',
    selected: false
  },
  {
    id: '311',
    parentId: '31',
    title: 'Item',
    color: 'gray',
    name: 'Placeholder',
    selected: false,
    multiSelect: false
  },

  {
    id: '32',
    parentId: '3',
    title: 'Subcategory',
    color: 'blue',
    name: 'Haplotypes',
    selected: false
  },
  {
    id: '321',
    parentId: '32',
    title: 'Item',
    color: 'yellow',
    name: 'Placeholder',
    selected: false,
    multiSelect: false
  },

  {
    id: '33',
    parentId: '3',
    title: 'Subcategory',
    color: 'red',
    name: 'Callset Evaluation',
    selected: false
  },
  {
    id: '331',
    parentId: '33',
    title: 'Item',
    color: 'blue',
    name: 'Placeholder',
    selected: false,
    multiSelect: false
  },


  {
    id: '4',
    title: 'Category',
    color: 'green',
    name: 'Phenotype Interpretation',
    selected: false
  },

  {
    id: '41',
    parentId: '4',
    title: 'Subcategory',
    color: 'red',
    name: 'Disease Ontology',
    selected: false
  },
  {
    id: '411',
    parentId: '41',
    title: 'Item',
    color: 'gray',
    name: 'SNOMED CT',
    selected: false,
    multiSelect: false
  },

  {
    id: '42',
    parentId: '4',
    title: 'Subcategory',
    color: 'blue',
    name: 'Drug Ontology',
    selected: false
  },
  {
    id: '421',
    parentId: '42',
    title: 'Item',
    color: 'green',
    name: 'RxNorm',
    selected: false,
    multiSelect: false
  },

  {
    id: '43',
    parentId: '4',
    title: 'Subcategory',
    color: 'blue',
    name: 'Clinical Guidelines',
    selected: false
  },
  {
    id: '431',
    parentId: '43',
    title: 'Item',
    color: 'red',
    name: 'ACMG-AMP',
    selected: false,
    multiSelect: false
  },
  {
    id: '432',
    parentId: '43',
    title: 'Item',
    color: 'yellow',
    name: 'Sherloc',
    selected: false,
    multiSelect: false
  },

  {
    id: '44',
    parentId: '4',
    title: 'Subcategory',
    color: 'yellow',
    name: 'Disease Onset and Progression',
    selected: false
  },
  {
    id: '441',
    parentId: '44',
    title: 'Item',
    color: 'green',
    name: 'Placeholder',
    selected: false,
    multiSelect: false
  },

  {
    id: '45',
    parentId: '4',
    title: 'Subcategory',
    color: 'red',
    name: 'Test Recommendations',
    selected: false
  },
  {
    id: '451',
    parentId: '45',
    title: 'Item',
    color: 'blue',
    name: 'NCBI GTR',
    selected: false,
    multiSelect: false
  },

  {
    id: '46',
    parentId: '4',
    title: 'Subcategory',
    color: 'red',
    name: 'Risks',
    selected: false
  },
  {
    id: '461',
    parentId: '46',
    title: 'Item',
    color: 'green',
    name: 'ClinVar',
    selected: false,
    multiSelect: true
  },

  {
    id: '47',
    parentId: '4',
    title: 'Subcategory',
    color: 'blue',
    name: 'Drug Interactions',
    selected: false
  },
  {
    id: '471',
    parentId: '47',
    title: 'Item',
    color: 'red',
    name: 'Drugbank',
    selected: false,
    multiSelect: true
  },
  {
    id: '472',
    parentId: '47',
    title: 'Item',
    color: 'red',
    name: 'DGI',
    selected: false,
    multiSelect: true
  },
];

export default mockData;
