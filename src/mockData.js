const mockData = [
  {
    id: '1',
    parentId: null,
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
    parentId: null,
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
    parentId: null,
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
    parentId: null,
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
