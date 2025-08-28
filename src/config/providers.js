export const providerConfig = {
  'googleapis.com': {
    rootDiscoveryUrl: 'https://discovery.googleapis.com/discovery/v1/apis?preferred=true',  
    additionalServiceData: [
          {
              name: "geminicloudassist",
              id: "geminicloudassist:v1alpha",
              version: "v1alpha",
              title: "Gemini Cloud Assist API",
              description: "The AI-powered assistant for Google Cloud.",
              discoveryRestUrl: "https://geminicloudassist.googleapis.com/$discovery/rest?version=v1alpha",
              icons: {
                  x16: "http://www.google.com/images/icons/product/search-32.gif",
                  x32: "http://www.google.com/images/icons/product/search-16.gif"
                },
              documentationLink: "https://cloud.google.com/marketplace/docs/partners/",
              preferred: true
          },
          {
              name: "cloudaicompanion",
              id: "cloudaicompanion:v1",
              version: "v1",
              title: "Gemini for Google Cloud API",
              description: "The AI-powered assistant for Google Cloud.",
              discoveryRestUrl: "https://cloudaicompanion.googleapis.com/$discovery/rest?version=v1",
              icons: {
                  x16: "http://www.google.com/images/icons/product/search-32.gif",
                  x32: "http://www.google.com/images/icons/product/search-16.gif"
                },
              documentationLink: "https://cloud.google.com/marketplace/docs/partners/",
              preferred: true
          },
          {
              name: "cloudcommerceprocurement",
              id: "cloudcommerceprocurement:v1",
              version: "v1",
              title: "Cloud Commerce Partner Procurement API",
              description: "Partner API for the Cloud Commerce Procurement Service.",
              discoveryRestUrl: "https://cloudcommerceprocurement.googleapis.com/$discovery/rest?version=v1",
              icons: {
                  x16: "http://www.google.com/images/icons/product/search-32.gif",
                  x32: "http://www.google.com/images/icons/product/search-16.gif"
                },
              documentationLink: "https://cloud.google.com/marketplace/docs/partners/",
              preferred: true
          },
          {
              id: "iam:v2beta",
              name: "iamv2beta",
              version: "v2beta",
              title: "Identity and Access Management (IAM) API",
              description: "Manages identity and access control for Google Cloud resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls. Enabling this API also enables the IAM Service Account Credentials API (iamcredentials.googleapis.com). However, disabling this API doesn't disable the IAM Service Account Credentials API.",
              discoveryRestUrl: "https://iam.googleapis.com/$discovery/rest?version=v2beta",
              icons: {
                x16: "https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png",
                x32: "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              },
              documentationLink: "https://cloud.google.com/iam/",
              preferred: false
          },
          {
          id: "iam:v1",
          name: "iam",
          version: "v1",
          title: "Identity and Access Management (IAM) API",
          description: "Manages identity and access control for Google Cloud resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls. Enabling this API also enables the IAM Service Account Credentials API (iamcredentials.googleapis.com). However, disabling this API doesn't disable the IAM Service Account Credentials API.",
          discoveryRestUrl: "https://iam.googleapis.com/$discovery/rest?version=v1",
          icons: {
              x16: "https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png",
              x32: "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
          },
          documentationLink: "https://cloud.google.com/iam/",
          preferred: false
          },
          {
          id: "iam:v2",
          name: "iamv2",
          version: "v2",
          title: "Identity and Access Management (IAM) API",
          description: "Manages identity and access control for Google Cloud resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls. Enabling this API also enables the IAM Service Account Credentials API (iamcredentials.googleapis.com). However, disabling this API doesn't disable the IAM Service Account Credentials API.",
          discoveryRestUrl: "https://iam.googleapis.com/$discovery/rest?version=v2",
          icons: {
              x16: "https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png",
              x32: "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
          },
          documentationLink: "https://cloud.google.com/iam/",
          preferred: true
          },            
    ],
    excludedServices: [
      'iam',
      'fcm',
      'fcmdata',
      'testing',
      'toolresults'      
    ],
    excludedServiceNamePattern: '^firebase($|.*)',
    requiredScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    configObj: {
      auth: {
          credentialsenvvar: 'GOOGLE_CREDENTIALS',
          type: 'service_account'
      }          
    }
  },
  firebase: {
      rootDiscoveryUrl: 'https://discovery.googleapis.com/discovery/v1/apis?preferred=true',  
      additionalServiceData: [],
      excludedServices: [],
      includedServiceNames: [
        'fcm',
        'fcmdata',
        'testing',
        'toolresults'
      ],
      serviceNameMap: {
        firebaseappcheck: 'appcheck',
        firebaseappdistribution: 'appdistribution',
        firebaseapphosting: 'apphosting',
        firebasedatabase: 'database',
        firebasedataconnect: 'dataconnect',
        firebasehosting: 'hosting',
        firebaseml: 'ml',
        firebaserules: 'rules',
        firebasestorage: 'storage'
      },
      includedServiceNamePattern: '^firebase($|.*)',
      requiredScopes: ['https://www.googleapis.com/auth/cloud-platform'],
      configObj: {
        auth: {
            credentialsenvvar: 'GOOGLE_CREDENTIALS',
            type: 'service_account'
        }
      }
  },
  googleworkspace: {
      rootDiscoveryUrl: 'https://discovery.googleapis.com/discovery/v1/apis?preferred=true',  
      additionalServiceData: [],
      excludedServices: [], 
      requiredScopes: [
          "https://www.googleapis.com/auth/drive",
          "https://www.googleapis.com/auth/drive.activity",
          "https://www.googleapis.com/auth/drive.admin.labels"
      ],     
      includedServiceData: [
          {
              "kind": "discovery#directoryItem",
              "id": "drive:v2",
              "name": "drivev2",
              "version": "v2",
              "title": "Drive API",
              "description": "Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.",
              "discoveryRestUrl": "https://www.googleapis.com/discovery/v1/apis/drive/v2/rest",
              "discoveryLink": "./apis/drive/v2/rest",
              "icons": {
                "x16": "https://ssl.gstatic.com/docs/doclist/images/drive_icon_16.png",
                "x32": "https://ssl.gstatic.com/docs/doclist/images/drive_icon_32.png"
              },
              "documentationLink": "https://developers.google.com/drive/",
              "preferred": false
            },
            {
              "kind": "discovery#directoryItem",
              "id": "drive:v3",
              "name": "drivev3",
              "version": "v3",
              "title": "Drive API",
              "description": "Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.",
              "discoveryRestUrl": "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
              "discoveryLink": "./apis/drive/v3/rest",
              "icons": {
                "x16": "https://ssl.gstatic.com/docs/doclist/images/drive_icon_16.png",
                "x32": "https://ssl.gstatic.com/docs/doclist/images/drive_icon_32.png"
              },
              "documentationLink": "https://developers.google.com/drive/",
              "preferred": true
            },
            {
              "kind": "discovery#directoryItem",
              "id": "driveactivity:v2",
              "name": "driveactivityv2",
              "version": "v2",
              "title": "Drive Activity API",
              "description": "Provides a historical view of activity in Google Drive.",
              "discoveryRestUrl": "https://driveactivity.googleapis.com/$discovery/rest?version=v2",
              "icons": {
                "x16": "https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png",
                "x32": "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              },
              "documentationLink": "https://developers.google.com/drive/activity/",
              "preferred": true
            },
            {
              "kind": "discovery#directoryItem",
              "id": "drivelabels:v2beta",
              "name": "drivelabelsv2beta",
              "version": "v2beta",
              "title": "Drive Labels API",
              "description": "An API for managing Drive Labels",
              "discoveryRestUrl": "https://drivelabels.googleapis.com/$discovery/rest?version=v2beta",
              "icons": {
                "x16": "https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png",
                "x32": "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              },
              "documentationLink": "https://developers.google.com/drive/labels",
              "preferred": false
            },
            {
              "kind": "discovery#directoryItem",
              "id": "drivelabels:v2",
              "name": "drivelabelsv2",
              "version": "v2",
              "title": "Drive Labels API",
              "description": "An API for managing Drive Labels",
              "discoveryRestUrl": "https://drivelabels.googleapis.com/$discovery/rest?version=v2",
              "icons": {
                "x16": "https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png",
                "x32": "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              },
              "documentationLink": "https://developers.google.com/drive/labels",
              "preferred": true
            },
      ],
      configObj: {
        auth: {
            credentialsenvvar: 'GOOGLE_CREDENTIALS',
            type: 'service_account'
        }
      }       
  },
  googleadmin: {
      rootDiscoveryUrl: 'https://admin.googleapis.com/$discovery/rest?version=directory_v1',  
      additionalServiceData: [],
      excludedServices: [],
      includedServiceData: [
          {
              "kind": "discovery#directoryItem",
              "id": "directory:v1",
              "name": "directory",
              "version": "v1",
              "title": "Directory API",
              "description": "Google Admin API.",
              "discoveryRestUrl": "https://admin.googleapis.com/$discovery/rest?version=directory_v1",
              "preferred": true
            },
      ],      
      requiredScopes: ['https://www.googleapis.com/auth/cloud-platform'],
      configObj: {
        auth: {
            credentialsenvvar: 'GOOGLE_CREDENTIALS',
            type: 'service_account'
        }
      }          
  },
};
